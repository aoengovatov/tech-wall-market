import { Breadcrumbs } from "../../components";
import { OrderRoll } from "./components/order-roll/order-roll";

export const Orders = () => {
    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px]">
                <h1 className="ml-[10px] mb-[10px]">Заказы</h1>
                <div className="grid grid-cols-7 mb-[5px] px-[5px] w-[90%] px-[5px]">
                    <div className="text-gray">Дата</div>
                    <div className="text-gray">Покупатель</div>
                    <div className="text-gray">код заказа</div>
                    <div className="col-span-2 text-gray">товары</div>
                    <div className="text-gray">стоимость</div>
                    <div className="text-gray">статус</div>
                </div>

                <OrderRoll />
                <OrderRoll />
                <OrderRoll />
                <OrderRoll />
            </div>
        </>
    );
};
