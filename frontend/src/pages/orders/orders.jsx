import { Breadcrumbs, TitleProfileWithBack, Loader } from "../../components";
import { request } from "../../utils";
import { OrderRoll } from "./components/order-roll/order-roll";
import { useState, useEffect } from "react";

export const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [statusList, setStatusList] = useState([]);

    useEffect(() => {
        Promise.all([
            request("/orders").then(({ error, orders }) => {
                if (error === null) {
                    setOrders(orders);
                    setIsLoading(false);
                }
            }),
            request("/orders/status").then(({ error, statusList }) => {
                if (error === null) {
                    setStatusList(statusList);
                }
            }),
        ]);
    }, []);

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px] min-w-[750px] min-h-[50vh]">
                <TitleProfileWithBack>Заказы</TitleProfileWithBack>

                <div className="grid grid-cols-7 mb-[5px] px-[5px] w-[90%] px-[5px]">
                    <div className="text-gray">дата</div>
                    <div className="text-gray">покупатель</div>
                    <div className="text-gray">код заказа</div>
                    <div className="col-span-2 text-gray">товары</div>
                    <div className="text-gray">стоимость</div>
                    <div className="text-gray">статус</div>
                </div>
                {orders.length > 0 ? (
                    orders.map(
                        ({ id, owner, products, status, createdAt, totalPrice }) => (
                            <OrderRoll
                                key={id}
                                id={id}
                                owner={owner}
                                products={products}
                                status={status}
                                createdAt={createdAt}
                                totalPrice={totalPrice}
                                statusList={statusList}
                            />
                        )
                    )
                ) : isLoading ? (
                    <Loader />
                ) : (
                    <div className="my-4 text-center text-[17px]">нет заказов</div>
                )}
            </div>
        </>
    );
};
