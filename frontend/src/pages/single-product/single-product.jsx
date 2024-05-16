import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    Breadcrumbs,
    ButtonLike,
    ProductCode,
    CardPrice,
    SaleWidget,
    ButtonRed,
    Loader,
} from "../../components";
import { EditButton, ProductDescriptions } from "./components";
import { checkAccess, oldPriceCount, request } from "../../utils";
import { Page404 } from "../404/page-404";
import { OWNER_PRODUCT_STATUS } from "../../constants";
import { ROLE } from "../../constants";
import { getBasketProducts, setBasketList } from "../../store/basketSlice";
import { getFavoriteProducts, setFavoriteList } from "../../store/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserRole } from "../../store/userSlice";

export const SingleProduct = () => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userRole = useSelector(getUserRole);
    const [editFlag, setEditFlag] = useState(false);
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [productNotFound, setProductNotFound] = useState(false);
    const [isBasketFlag, setIsBasketFlag] = useState(false);
    const [isFavoriteFlag, setIsFavoriteFlag] = useState(false);
    const [oldPrice, setOldPrice] = useState(0);

    useEffect(() => {
        Promise.all([
            request(`/products/${params.productId}`).then((data) => {
                if (data.error === null) {
                    setProduct(data.product);
                } else {
                    setProductNotFound(true);
                }

                if (data?.product?.sale > 0) {
                    setOldPrice(oldPriceCount(data.product.price, data.product.sale));
                }
            }),
            request("/users/products").then(({ error, data }) => {
                if (error === null) {
                    const basketProducts = data?.products.filter(
                        (product) => product.status === OWNER_PRODUCT_STATUS.BASKET
                    );
                    dispatch(setBasketList(basketProducts));
                    const favoriteProducts = data?.products.filter(
                        (product) => product.status === OWNER_PRODUCT_STATUS.FAVORITE
                    );
                    dispatch(setFavoriteList(favoriteProducts));
                }
            }),
        ]);
    }, [params.productId, dispatch]);

    const basketProducts = useSelector(getBasketProducts);
    const favoriteProducts = useSelector(getFavoriteProducts);

    basketProducts.map((item) => {
        if (item.product._id === params.productId && isBasketFlag === false) {
            setIsBasketFlag(true);
        }
    });

    favoriteProducts.map((item) => {
        if (item.product._id === params.productId && isFavoriteFlag === false) {
            setIsFavoriteFlag(true);
        }
    });

    const addOwnerProduct = (status) => {
        if (userRole === ROLE.GUEST) {
            return navigate("/login");
        }

        const newOwnerProduct = {
            productId: params.productId,
            status,
            count: 1,
        };

        request("/users/products", "POST", newOwnerProduct).then(({ error, data }) => {
            if (error === null) {
                const favoriteProducts = data.products.filter(
                    (product) => product.status === OWNER_PRODUCT_STATUS.FAVORITE
                );
                dispatch(setFavoriteList(favoriteProducts));

                const basketProducts = data.products.filter(
                    (product) => product.status === OWNER_PRODUCT_STATUS.BASKET
                );
                dispatch(setBasketList(basketProducts));
            }
        });
    };

    const redirectToBasketPage = () => {
        return navigate("/profile/basket");
    };

    if (checkAccess([ROLE.ADMIN, ROLE.MODERATOR], userRole) && editFlag === false) {
        setEditFlag(true);
    }

    if (product?.name && isLoading === true) {
        setIsLoading(false);
    }

    return productNotFound ? (
        <Page404 />
        
    ) : (
        isLoading ? (
            <Loader />
        ) : (
            <>
            <Breadcrumbs />
            <div className="mt-[10px] mb-[30px] border-2 border-lightGray rounded-lg">
                <div className="flex flex-col w-full mb-0 md:mb-[15px] p-[15px] md:flex-row">
                    <div className="flex items-center justify-center w-full md:w-1/2">
                        <img src={product.imageUrl} className="w-[300px] m-[20px]"></img>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">
                            {editFlag && (
                                <EditButton
                                    link={`/profile/edit-product/${params.productId}`}
                                />
                            )}
                            <div className="flex items-start justify-between">
                                <div className="font-semibold text-[18px] sm:text-xl w-10/12 mb-[10px]">
                                    {product.name}
                                </div>
                                {!isBasketFlag && (
                                    <ButtonLike
                                        favoriteFlag={isFavoriteFlag}
                                        onClick={
                                            !isFavoriteFlag &&
                                            (() =>
                                                addOwnerProduct(
                                                    OWNER_PRODUCT_STATUS.FAVORITE
                                                ))
                                        }
                                    />
                                )}
                            </div>

                            <ProductCode>{product._id.slice(-8)}</ProductCode>
                        </div>
                        <div className="flex flex-col w-full bg-lightGray p-[20px] mt-[15px] rounded-xl">
                            <div className="flex items-start justify-between mb-[5px]">
                                <CardPrice
                                    price={product.price}
                                    oldPrice={oldPrice}
                                    color={"green"}
                                />
                                <SaleWidget count={product.sale} />
                            </div>
                            <div className="text-sm text-darkGray mb-[10px]">
                                бесплатная доставка курьером
                            </div>
                            <div className="w-9/12 m-auto md:w-8/12">
                                <ButtonRed
                                    onClick={
                                        isBasketFlag
                                            ? redirectToBasketPage
                                            : () =>
                                                  addOwnerProduct(
                                                      OWNER_PRODUCT_STATUS.BASKET
                                                  )
                                    }
                                >
                                    {isBasketFlag
                                        ? "Перейти в корзину"
                                        : "Добавить в корзину"}
                                </ButtonRed>
                            </div>
                        </div>
                    </div>
                </div>

                <ProductDescriptions
                    description={product.description}
                    characteristic={product.characteristic}
                />
            </div>
        </>)
    );
};
