import { Breadcrumbs, BackBtn } from "../../components";
import { OrderRoll } from "./components/order-roll/order-roll";
import { useNavigate } from "react-router-dom";

const orders = [
    {
        id: "015785",
        createdAt: "2019-05-03 21:42",
        owner: "ivan1994",
        products: [
            {
                id: "25346",
                name: "Стиральная машинка",
                count: 2,
            },
            {
                id: "25qwe",
                name: "Телевизор Thompson 32 дюйма с креплением на стену",
                count: 1,
            },
            {
                id: "25qw345e",
                name: '15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space Gray(Космический серый)',
                count: 1,
            },
        ],
        totalPrice: 19990,
    },
    {
        id: "012345",
        createdAt: "2020-03-01 09:22",
        owner: "Evgen1978",
        products: [
            {
                id: "25346",
                name: "Стиральная машинка",
                count: 2,
            },
            {
                id: "25qwe",
                name: "Телевизор Thompson 32 дюйма с креплением на стену",
                count: 1,
            },
            {
                id: "25qw345e",
                name: '15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space Gray(Космический серый)',
                count: 1,
            },
        ],
        totalPrice: 19990,
    },
];

export const Orders = () => {
    const navigate = useNavigate();

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px]">
                <div className="flex items-center mb-[10px]">
                    <BackBtn onClick={() => navigate(-1)} />
                    <h1 className="ml-[10px]">
                       Заказы
                    </h1>
                </div>
                <div className="grid grid-cols-7 mb-[5px] px-[5px] w-[90%] px-[5px]">
                    <div className="text-gray">дата</div>
                    <div className="text-gray">покупатель</div>
                    <div className="text-gray">код заказа</div>
                    <div className="col-span-2 text-gray">товары</div>
                    <div className="text-gray">стоимость</div>
                    <div className="text-gray">статус</div>
                </div>
                {orders.map(({ id, owner, products, createdAt, totalPrice }) => (
                    <OrderRoll
                        key={id}
                        id={id}
                        owner={owner}
                        products={products}
                        createdAt={createdAt}
                        totalPrice={totalPrice}
                    />
                ))}
            </div>
        </>
    );
};
