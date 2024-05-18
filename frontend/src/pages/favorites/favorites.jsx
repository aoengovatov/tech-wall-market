import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
    Breadcrumbs,
    ProductItem,
    InfoTextBlock,
    TitleProfileWithBack,
    ButtonRed,
    Loader,
} from "../../components";
import { useEffect, useState } from "react";
import { request } from "../../utils";
import {
    getFavoriteProducts,
    setFavoriteList,
    deleteFavoriteProduct,
    resetFavoriteProducts,
} from "../../store/favoriteSlice";
import { OWNER_PRODUCT_STATUS } from "../../constants";

export const Favorites = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        request("/users/products").then(({ error, data }) => {
            if (error === null) {
                const favoriteProducts = data.products.filter(
                    (product) => product.status === OWNER_PRODUCT_STATUS.FAVORITE
                );
                dispatch(setFavoriteList(favoriteProducts));
                setIsLoading(false);
            }
        });
    }, [dispatch]);

    const favoriteProducts = useSelector(getFavoriteProducts);

    const deleteProduct = (id) => {
        request(`/users/products/${id}`, "DELETE").then(({ error }) => {
            if (error === null) {
                dispatch(deleteFavoriteProduct(id));
            }
        });
    };

    const addAllProductsInBasket = () => {
        request("/users/products?updateAll=true", "POST", {
            status: OWNER_PRODUCT_STATUS.BASKET,
        }).then(({ error }) => {
            if (error === null) {
                dispatch(resetFavoriteProducts());
                return navigate("/profile/basket");
            }
        });
    };

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[20px] min-h-[50Vh]">
                <TitleProfileWithBack>Избранное</TitleProfileWithBack>

                {favoriteProducts?.length > 0 ? (
                    <>
                        <div className="flex flex-col min-h-[40vh] ml-[10px]">
                            {favoriteProducts.map(
                                ({
                                    product: { _id: id, name, price, sale, imageUrl },
                                }) => (
                                    <ProductItem
                                        key={id}
                                        id={id}
                                        name={name}
                                        price={price}
                                        sale={sale}
                                        imageUrl={imageUrl}
                                        likeButton={false}
                                        buttonDelete={true}
                                        deleteProduct={deleteProduct}
                                    />
                                )
                            )}
                        </div>
                        {favoriteProducts?.length > 1 && (
                            <div className="m-auto w-[300px]">
                                <ButtonRed onClick={addAllProductsInBasket}>
                                    добавить все товары в корзину
                                </ButtonRed>
                            </div>
                        )}
                    </>
                ) : isLoading ? (
                    <Loader />
                ) : (
                    <InfoTextBlock>
                        в избранном пусто :( <br />
                        <Link to={"/catalog"} className="text-blue hover:underline">
                            перейти в каталог
                        </Link>
                    </InfoTextBlock>
                )}
            </div>
        </>
    );
};
