import { Breadcrumbs } from "../../components";
import { ProductCard } from "./components";

export const MyOrders = () => {
    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px]">
                <h1 className="ml-[10px] mb-[10px]">Мои заказы</h1>
                <div className="px-[20px] py-[15px] bg-lightGray rounded-2xl">
                    <div className="mb-[15px] flex align-top justify-between">
                        <div className="flex flex-col">
                            <h2>Заказ № 31254</h2>
                            <div className="text-darkGray">2019-05-03 21:42</div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="text-[22px]">сборка на складе</div>
                            <div className="text-darkGray">текущий статус</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 content-center justify-items-center gap-4 mb-[20px]">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <div className="flex items-center justify-end">
                        <h2 className="mr-[5px]">Итого: </h2>
                        <span className="text-[22px] font-semibold text-green">
                            149990
                            <span className="ml-[3px]">₽</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
