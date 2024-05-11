import { Breadcrumbs, BackBtn } from "../../components";
import { request } from "../../utils";
import { OrderRoll } from "./components/order-roll/order-roll";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Orders = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [statusList, setStatusList] = useState([]);

    useEffect(() => {
        Promise.all([
            request("/orders").then(({ error, orders }) => {
                if (error === null) {
                    setOrders(orders);
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
            <div className="mb-[30px]">
                <div className="flex items-center mb-[10px]">
                    <BackBtn onClick={() => navigate(-1)} />
                    <h1 className="ml-[10px]">Заказы</h1>
                </div>
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
                ) : (
                    <div className="my-4 text-center text-[17px]">нет заказов</div>
                )}
            </div>
        </>
    );
};
