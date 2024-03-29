import { Breadcrumbs, CardPrice, ButtonRed } from "../../components";
import { CardBasket } from "./components";

export const Basket = () => {
    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px]">
                <h1 className="ml-[10px] mb-[10px]">Корзина</h1>
                <div className="flex">
                    <div className="w-8/12">
                        <div className="flex flex-col mr-[10px]">
                            <CardBasket url={"/catalog/1"} />
                            <CardBasket url={"/catalog/1"} />
                            <CardBasket url={"/catalog/1"} />
                            <CardBasket url={"/catalog/1"} />
                        </div>
                    </div>
                    <div className="w-4/12">
                        <div className="flex flex-col w-full bg-lightGray p-[20px] rounded-xl">
                            <div className="flex items-center justify-between mb-[5px]">
                                <div className="text-2xl font-semibold">Итого:</div>
                                <CardPrice price={149900} color="green" />
                            </div>
                            <div className="text-sm text-darkGray mb-[10px]">
                                количество товаров в корзине: 1
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
