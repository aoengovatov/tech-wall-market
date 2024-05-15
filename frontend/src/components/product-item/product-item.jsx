import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    ButtonBlue,
    ButtonLike,
    CardPrice,
    SaleWidget,
    ProductCode,
    ButtonDelete,
} from "..";
import { request, oldPriceCount } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { getBasketProducts } from "../../store/basketSlice";
import { getUserRole } from "../../store/userSlice";
import { ROLE } from "../../constants";
import { setBasketList } from "../../store/basketSlice";
import { getFavoriteProducts, setFavoriteList } from "../../store/favoriteSlice";
import { OWNER_PRODUCT_STATUS } from "../../constants";

export const ProductItem = ({
    likeButton = true,
    buttonDelete = false,
    id,
    name,
    price,
    sale,
    imageUrl,
    deleteProduct = null,
}) => {
    const paddingContentRight = buttonDelete ? 20 : 0;
    const [isBasketFlag, setIsBasketFlag] = useState(false);
    const [isFavoriteFlag, setIsFavoriteFlag] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userRole = useSelector(getUserRole);

    let oldPrice = 0;
    if (sale > 0) {
        oldPrice = oldPriceCount(price, sale);
    }

    const addOwnerProduct = (status) => {
        if (userRole === ROLE.GUEST) {
            return navigate("/login");
        }

        const newOwnerProduct = {
            productId: id,
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

    const basketProducts = useSelector(getBasketProducts);
    const favoriteProducts = useSelector(getFavoriteProducts);

    basketProducts.map((item) => {
        if (item.product._id === id && isBasketFlag === false) {
            setIsBasketFlag(true);
        }
    });

    favoriteProducts.map((item) => {
        if (item.product._id === id && isFavoriteFlag === false) {
            setIsFavoriteFlag(true);
        }
    });

    const redirectToBasketPage = () => {
        return navigate("/profile/basket");
    };

    return (
        <div className="flex flex-col w-full h-fit border-2 border-lightGray rounded-lg mb-[10px] p-[10px] pr-[${paddingBlockRight}px] transition-all duration-200 hover:border-lightBlue">
            <div className="flex justify-end">
                <SaleWidget count={sale} />
                {buttonDelete && (
                    <div className="ml-[10px]">
                        <ButtonDelete onClick={() => deleteProduct(id)} />
                    </div>
                )}
            </div>
            <div
                className={`flex flex-col pr-[${paddingContentRight}px] min-[760px]:flex-row`}
            >
                <div className="flex min-w-[200px] justify-center mb-[10px] min-[760px]:mb-0">
                    <img src={imageUrl} className="h-[100px] mx-[20px]"></img>
                </div>

                <div className="flex flex-col w-full h-full justify-around mt-[5px]">
                    <div className="flex flex-col justify-between min-[540px]:flex-row">
                        <Link
                            to={`/catalog/${id}`}
                            className="font-semibold text-base w-full mb-[7px] min-[500px]:w-8/12 min-[540px]:mb-0"
                        >
                            {name}
                        </Link>
                        <div className="self-end mb-[7px] min-[540px]:self-start min-[540px]:mb-0">
                            <CardPrice price={price} oldPrice={oldPrice} />
                        </div>
                    </div>

                    <div className="flex items-end justify-between">
                        <div className="w-fit min-[540px]:w-8/12">
                            <ProductCode>{id.slice(-8)}</ProductCode>
                        </div>
                        <div className="flex">
                            {likeButton && !isBasketFlag && (
                                <div className="mr-[5px]">
                                    <ButtonLike
                                        favoriteFlag={isFavoriteFlag}
                                        onClick={
                                            isFavoriteFlag === false
                                                ? () =>
                                                      addOwnerProduct(
                                                          OWNER_PRODUCT_STATUS.FAVORITE
                                                      )
                                                : null
                                        }
                                    />
                                </div>
                            )}
                            <ButtonBlue
                                onClick={
                                    isBasketFlag
                                        ? redirectToBasketPage
                                        : () =>
                                              addOwnerProduct(OWNER_PRODUCT_STATUS.BASKET)
                                }
                            >
                                {isBasketFlag ? "оформить заказ" : "в корзину"}
                            </ButtonBlue>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
