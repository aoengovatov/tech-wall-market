import { Link } from "react-router-dom";
import { ButtonDelete, CardPrice, ProductCode } from "../../../../components";
import { ItemAmount } from "../item-amount/item-amount";

export const CardBasket = ({ url }) => {
    return (
        <div className="flex w-full items-center h-[130px] border-2 border-lightGray rounded-lg mb-[10px] p-[10px] relation transition-all duration-200 relative hover:border-lightBlue">
            <img src="/src/assets/item-logo-min.png" className="h-[70px] mx-[20px]"></img>

            <div className="absolute top-2 right-2">
                <ButtonDelete />
            </div>

            <div className="flex flex-col w-full h-full justify-around">
                <div className="flex mt-[10px]">
                    <Link to={url} className="font-semibold text-base w-9/12">
                        15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space
                        Gray(Космический серый)
                    </Link>
                </div>

                <div className="flex items-end justify-between">
                    <ProductCode>ir1785</ProductCode>

                    <div className="flex items-center">
                        <ItemAmount />
                        <CardPrice price={149900} className="w-4/12" />
                    </div>
                </div>
            </div>
        </div>
    );
};
