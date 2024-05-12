import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    Breadcrumbs,
    ProductItem,
    InfoTextBlock,
    TitleProfileWithBack,
} from "../../components";
import { useEffect } from "react";
import { request } from "../../utils";
import {
    getFavoriteProducts,
    setFavoriteList,
    deleteFavoriteProduct,
} from "../../store/favoriteSlice";
import { OWNER_PRODUCT_STATUS } from "../../constants";

export const Favorites = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        request("/users/products").then(({ error, data }) => {
            if (error === null) {
                const favoriteProducts = data.products.filter(
                    (product) => product.status === OWNER_PRODUCT_STATUS.FAVORITE
                );
                dispatch(setFavoriteList(favoriteProducts));
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

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[20px]">
                <TitleProfileWithBack>Избранное</TitleProfileWithBack>

                {favoriteProducts?.length > 0 ? (
                    <div className="flex flex-col ml-[10px]">
                        {favoriteProducts.map(
                            ({ product: { _id: id, name, price, sale, imageUrl } }) => (
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
