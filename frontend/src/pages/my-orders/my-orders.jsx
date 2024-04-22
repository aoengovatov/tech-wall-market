import { Breadcrumbs } from "../../components";
import { Order } from "./components/order/Order";

const orders = [
    {
        id: "3413c1234",
        totalPrice: 199990,
        date: "2019-05-03 21:42",
        products: [
            {
                id: "12341",
                name: '15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space Gray (Космический серый)',
                price: "15990",
                count: "2",
                imageUrl: "/src/assets/item-logo-min.png",
            },
            {
                id: "12334",
                name: '15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space Gray (Космический серый)',
                price: "15990",
                count: "4",
                imageUrl: "/src/assets/item-logo-min.png",
            },
            {
                id: "1233430",
                name: '15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space Gray (Космический серый)',
                price: "15990",
                count: "5",
                imageUrl: "/src/assets/item-logo-min.png",
            },
            {
                id: "12940",
                name: '15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space Gray (Космический серый)',
                price: "15990",
                count: "1",
                imageUrl: "/src/assets/item-logo-min.png",
            },
        ],
        status: "сборка на складе",
    },
    {
        id: "3413c123454",
        totalPrice: 199990,
        date: "2018-05-03 15:24",
        products: [
            {
                id: "12341",
                name: '15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space Gray (Космический серый)',
                price: "15990",
                count: "5",
                imageUrl: "/src/assets/item-logo-min.png",
            },
            {
                id: "12334",
                name: '15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space Gray (Космический серый)',
                price: "15990",
                count: "2",
                imageUrl: "/src/assets/item-logo-min.png",
            },
            {
                id: "1233430",
                name: '15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space Gray (Космический серый)',
                price: "15990",
                count: "1",
                imageUrl: "/src/assets/item-logo-min.png",
            },
            {
                id: "12940",
                name: '15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space Gray (Космический серый)',
                price: "15990",
                count: "3",
                imageUrl: "/src/assets/item-logo-min.png",
            },
        ],
        status: "сборка на складе",
    },
];

export const MyOrders = () => {
    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px]">
                <h1 className="ml-[10px] mb-[10px]">Мои заказы</h1>
                {orders?.length > 0 ? (
                    <>
                        {orders.map(({ id, date, status, products, totalPrice }) => (
                            <Order
                                key={id}
                                id={id}
                                date={date}
                                status={status}
                                products={products}
                                totalPrice={totalPrice}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <div className="text-[22px]">Не найдено заказов</div>
                    </>
                )}
            </div>
        </>
    );
};
