import { useDispatch, useSelector } from "react-redux";
import { Breadcrumbs, CardPrice, ButtonRed } from "../../components";
import { request } from "../../utils";
import { CardBasket } from "./components";
import { useEffect } from "react";
import { getBasketProducts, setBasketList } from "../../store/basketSlice";
import { OWNER_PRODUCT_STATUS } from "../../constants";

export const Basket = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        request("/users/products").then(({ error, data }) => {
            if (error === null) {
                const basketProducts = data.products.filter(
                    (product) => product.status === OWNER_PRODUCT_STATUS.BASKET
                );
                dispatch(setBasketList(basketProducts));
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

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px]">
                <h1 className="ml-[10px] mb-[10px]">Корзина</h1>
                <div className="flex">
                    <div className="w-8/12">
                        <div className="flex flex-col mr-[10px]">
                            {basketProducts.map(
                                ({
                                    count,
                                    product: { _id: id, name, price, oldPrice, imageUrl },
                                }) => (
                                    <CardBasket
                                        key={id}
                                        id={id}
                                        count={count}
                                        name={name}
                                        price={price}
                                        oldPrice={oldPrice}
                                        imageUrl={imageUrl}
                                    />
                                )
                            )}
                        </div>
                    </div>
                    <div className="w-4/12">
                        <div className="flex flex-col w-full bg-lightGray p-[20px] rounded-xl">
                            <div className="flex items-center justify-between mb-[5px]">
                                <div className="text-2xl font-semibold">Итого:</div>
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
                                <ButtonRed>оформить заказ</ButtonRed>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
