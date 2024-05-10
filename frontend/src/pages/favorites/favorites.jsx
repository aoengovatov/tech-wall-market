import { useDispatch, useSelector } from "react-redux";
import { Breadcrumbs, ProductItem } from "../../components";
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
                <h1 className="ml-[10px] mb-[10px]">Избранное</h1>
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
            </div>
        </>
    );
};
