import { useDispatch, useSelector } from "react-redux";
import {
    Breadcrumbs,
    CardPrice,
    ButtonRed,
    InfoTextBlock,
    TitleProfileWithBack,
    Loader,
} from "../../components";
import { request } from "../../utils";
import { CardBasket } from "./components";
import { useEffect, useState } from "react";
import {
    deleteAllBasketProducts,
    deleteBasketProduct,
    getBasketProducts,
    setBasketList,
} from "../../store/basketSlice";
import { OWNER_PRODUCT_STATUS } from "../../constants";
import { getUser } from "../../store/userSlice";
import { Link, useNavigate } from "react-router-dom";

export const Basket = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const user = useSelector(getUser);

    useEffect(() => {
        request("/users/products").then(({ error, data }) => {
            if (error === null) {
                const basketProducts = data.products.filter(
                    (product) => product.status === OWNER_PRODUCT_STATUS.BASKET
                );
                dispatch(setBasketList(basketProducts));
                setIsLoading(false);
            }
        });
    }, [dispatch]);

    const basketProducts = useSelector(getBasketProducts);

    let totalCount = 0;
    let totalPrice = 0;

    basketProducts.map((item) => {
        const price =
            item.product.price !== 0 ? item.product.price : item.product.oldPrice;
        totalPrice += price * item.count;
        totalCount += item.count;
    }, 0);

    const deleteProduct = (id) => {
        request(`/users/products/${id}`, "DELETE").then(({ error }) => {
            if (error === null) {
                dispatch(deleteBasketProduct(id));
            }
        });
    };

    const navigateToMyOrders = () => {
        return navigate("/profile/my-orders");
    };

    const addOrder = () => {
        if (totalCount > 0) {
            let products = [];
            basketProducts.map((item) => {
                products.push({
                    productId: item.product._id,
                    count: item.count,
                    price: item.product.price,
                    name: item.product.name,
                    imageUrl: item.product.imageUrl,
                });
            });

            const newOrder = {
                owner: user.id,
                totalPrice,
                products,
            };

            request("/orders/owner", "POST", newOrder);
            request("/users/products/basket", "DELETE").then(({ error }) => {
                if (error === null) {
                    dispatch(deleteAllBasketProducts());
                    navigateToMyOrders();
                }
            });
        }
    };

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px] min-h-[50vh]">
                <TitleProfileWithBack>Корзина</TitleProfileWithBack>

                {basketProducts?.length > 0 ? (
                    <div className="flex flex-col items-center min-[880px]:items-start min-[880px]:flex-row">
                        <div className="w-full min-[880px]:w-8/12">
                            <div className="flex flex-col mr-0 min-[880px]:mr-[10px]">
                                {basketProducts.map(
                                    ({
                                        count,
                                        product: { _id: id, name, price, sale, imageUrl },
                                    }) => (
                                        <CardBasket
                                            key={id}
                                            id={id}
                                            count={count}
                                            name={name}
                                            price={price}
                                            sale={sale}
                                            imageUrl={imageUrl}
                                            deleteProduct={deleteProduct}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                        {totalCount > 0 && (
                            <div className="w-full min-[450px]:w-8/12 min-[880px]:w-4/12">
                                <div className="flex flex-col w-full bg-lightGray p-[20px] rounded-xl">
                                    <div className="flex items-center justify-between mb-[5px]">
                                        <div className="text-2xl font-semibold">
                                            Итого:
                                        </div>
                                        <CardPrice
                                            price={totalPrice}
                                            oldPrice={0}
                                            color="green"
                                        />
                                    </div>
                                    <div className="text-sm text-darkGray mb-[10px]">
                                        количество товаров в корзине: {totalCount}
                                    </div>
                                    <div className="w-full m-auto">
                                        <ButtonRed onClick={addOrder}>
                                            оформить заказ
                                        </ButtonRed>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : isLoading ? (
                    <Loader />
                ) : (
                    <InfoTextBlock>
                        в корзине пусто :( <br />
                        <Link to={"/catalog"} className="text-blue hover:underline">
                            перейти в каталог
                        </Link>
                    </InfoTextBlock>
                )}
            </div>
        </>
    );
};
