import { ButtonBlue, ButtonLike, CardPrice } from "../../../../components";

export const CardItem = () => {
    return (
        <div className="flex w-full items-center h-[160px] border-2 border-lightGray rounded-lg mb-[10px] p-[10px]">
            <img
                src="/src/assets/item-logo-min.png"
                className="h-[100px] mx-[20px]"
            ></img>
            <div className="flex flex-col w-full h-full justify-around">
                <div className="flex justify-between">
                    <div className="font-semibold text-base w-8/12">
                        15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space
                        Gray(Космический серый)
                    </div>
                    <CardPrice price={149900} oldPrice={189900} className="w-4/12" />
                </div>
                <div className="flex items-end justify-between">
                    <div className="w-8/12 text-xs text-gray">код товара: ir1785</div>
                    <div className="flex">
                        <div className="mr-[5px]"><ButtonLike /></div>
                        <ButtonBlue>в корзину</ButtonBlue>
                    </div>
                </div>
            </div>
        </div>
    );
};
