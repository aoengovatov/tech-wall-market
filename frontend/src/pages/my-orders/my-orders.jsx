import { useState, useEffect } from "react";
import { Breadcrumbs, InfoTextBlock, Loader, TitleProfileWithBack } from "../../components";
import { Order } from "./components/order/Order";
import { request } from "../../utils";

export const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        request("/orders/owner").then(({ error, orders }) => {
            if (error === null) {
                setOrders(orders);
                setIsLoading(false);
            }
        });
    }, []);

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px] min-h-[50vh]">
                <TitleProfileWithBack>Мои заказы</TitleProfileWithBack>

                {orders.length > 0 ? (
                    <>
                        {orders.map(
                            ({ _id: id, createdAt, status, products, totalPrice }) => (
                                <Order
                                    key={id}
                                    id={id}
                                    createdAt={createdAt}
                                    status={status}
                                    products={products}
                                    totalPrice={totalPrice}
                                />
                            )
                        )}
                    </>
                ) : isLoading ? (<Loader />) : (
                    <InfoTextBlock>заказов не найдено</InfoTextBlock>
                )}
            </div>
        </>
    );
};
