import { CategoryPanel } from "./components";
import { Breadcrumbs, CardPrice } from "../../components";

export const Catalog = () => {
    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px]">
                <h1 className="ml-[10px] mb-[10px]">Каталог</h1>
                <div className="flex">
                    <div className="flex flex-col w-3/12">
                        <CategoryPanel />
                    </div>
                    <div className="w-9/12">
                        <div className="flex flex-col ml-[10px]">
                            <div className="flex w-full items-center h-[160px] border-2 border-lightGray rounded-lg mb-[10px] p-[10px]">
                                <img
                                    src="/src/assets/item-logo-min.png"
                                    className="h-[100px] mx-[20px]"
                                ></img>
                                <div className="flex flex-col w-full h-full justify-around">
                                    <div className="flex justify-between">
                                        <div className="font-semibold text-base w-8/12">
                                            15,3" Ноутбук Apple MacBook Air 2023 (M2)
                                            8/512 Гб, Space Gray(Космический серый)
                                        </div>
                                        <CardPrice
                                            price={149900}
                                            oldPrice={189900}
                                            className="w-4/12"
                                        />
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="text-xs w-8/12">
                                            код товара: ir1785
                                        </div>
                                        <div className="flex">
                                            <div>лайк</div>
                                            <div>в корзину</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
