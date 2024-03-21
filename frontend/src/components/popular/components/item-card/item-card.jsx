import { Link } from "react-router-dom";
import { SaleWidget } from "../../../sale-widget/sale-widget";
import { CardPrice } from "../../../card-price/card-price";
import { ButtonBlue } from "../../../button-blue/button-blue";

export const ItemCard = () => {
    return (
        <div className="flex flex-col items-center justify-around w-[250px] min-h-[315px] border-2 border-midGray rounded-xl h-[100px] p-[15px] transition-all duration-300 hover:border-lightBlue relative">
            <div className="absolute top-2 right-2">
                <SaleWidget count={30} />
            </div>

            <img src="/src/assets/item-logo-min.png" className="w-[185px]"></img>
            <Link to={"/catalog"}>
                <div className="leading-5">
                    15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space
                    Gray(Космический серый)
                </div>
            </Link>

            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                    <CardPrice price={149990} oldPrice={189990} />
                </div>
                <ButtonBlue>в корзину</ButtonBlue>
            </div>
        </div>
    );
};
