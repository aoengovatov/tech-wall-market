import { Link } from "react-router-dom";
import { SaleWidget } from "../../../sale-widget/sale-widget";
import { CardPrice } from "../../../card-price/card-price";
import { ButtonBlue } from "../../../button-blue/button-blue";
import { oldPriceCount } from "../../../../utils";

export const ItemCard = ({ id, name, price, sale, imageUrl }) => {
    let oldPrice = 0;

    if (sale > 0) {
        oldPrice = oldPriceCount(price, sale);
    }

    return (
        <div className="flex flex-col items-center justify-around max-w-[100%] min-w-[250px] min-h-[270px] border-2 shadow-md border-midGray rounded-xl h-[100px] p-[15px] transition-all duration-300 hover:border-lightBlue relative min-[540px]:max-w-[48%] md:min-h-[310px] min-[1095px]:max-w-[250px]">
            <div className="absolute top-2 right-2">
                <SaleWidget count={sale} />
            </div>

            <img src={imageUrl} className="max-w-[155px] max-h-[120px] md:max-w-[185px]"></img>
            <Link to={`/catalog/${id}`}>
                <div className="leading-5">{name}</div>
            </Link>

            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                    <CardPrice price={price} oldPrice={oldPrice} />
                </div>
                <ButtonBlue>в корзину</ButtonBlue>
            </div>
        </div>
    );
};
