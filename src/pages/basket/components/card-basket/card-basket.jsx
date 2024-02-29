import { Link } from "react-router-dom";
import { CardPrice, GoodCode } from "../../../../components";
import { ItemAmount } from "../item-amount/item-amount";

export const CardBasket = ({ url }) => {
    return (
        <div className="flex w-full items-center h-[130px] border-2 border-lightGray rounded-lg mb-[10px] p-[10px] relation transition-all duration-200 relative hover:border-lightBlue">
            <img src="/src/assets/item-logo-min.png" className="h-[70px] mx-[20px]"></img>

            <button className="absolute top-2 right-2 hover:scale-110">
                <img src="/src/assets/x.png" className="w-[13px] h-[13px]" />
            </button>

            <div className="flex flex-col w-full h-full justify-around">
                <div className="flex mt-[10px]">
                    <Link to={url} className="font-semibold text-base w-9/12">
                        15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space
                        Gray(Космический серый)
                    </Link>
                </div>

                <div className="flex items-end justify-between">
                    <GoodCode>ir1785</GoodCode>

                    <div className="flex items-center">
                        <ItemAmount />
                        <CardPrice price={149900} className="w-4/12" />
                    </div>
                </div>
            </div>
        </div>
    );
};
