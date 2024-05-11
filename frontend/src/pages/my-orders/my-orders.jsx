import { useState, useEffect } from "react";
import { Breadcrumbs } from "../../components";
import { Order } from "./components/order/Order";
import { request } from "../../utils";

export const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        request("/orders/owner").then(({ error, orders }) => {
            if (error === null) {
                setOrders(orders);
            }
        });
    }, []);

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px]">
                <h1 className="ml-[10px] mb-[10px]">Мои заказы</h1>
                {orders.length > 0 ? (
                    <>
                        {orders.map(({ id, createdAt, status, products, totalPrice }) => (
                            <Order
                                key={id}
                                id={id}
                                createdAt={createdAt}
                                status={status}
                                products={products}
                                totalPrice={totalPrice}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <div className="text-[17px] my-4 text-center">
                            заказов не найдено
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
