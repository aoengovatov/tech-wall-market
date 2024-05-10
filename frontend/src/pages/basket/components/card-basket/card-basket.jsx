import { Link } from "react-router-dom";
import { ButtonDelete, CardPrice, ProductCode } from "../../../../components";
import { ItemAmount } from "../item-amount/item-amount";
import { oldPriceCount } from "../../../../utils";

export const CardBasket = ({ id, count, name, price, sale, imageUrl, deleteProduct }) => {
    let oldPrice = 0;
    if (sale > 0) {
        oldPrice = oldPriceCount(price, sale);
    }

    return (
        <div className="flex w-full items-center h-[130px] border-2 border-lightGray rounded-lg mb-[10px] p-[10px] relation transition-all duration-200 relative hover:border-lightBlue">
            <img src={imageUrl} className="h-[70px] mx-[20px]"></img>

            <div className="absolute top-2 right-2">
                <ButtonDelete onClick={() => deleteProduct(id)}/>
            </div>

            <div className="flex flex-col w-full h-full justify-around">
                <div className="flex mt-[10px]">
                    <Link
                        to={`/catalog/${id}`}
                        className="font-semibold text-base w-9/12"
                    >
                        {name}
                    </Link>
                </div>

                <div className="flex items-end justify-between">
                    <ProductCode>{id.slice(-8)}</ProductCode>

                    <div className="flex items-center">
                        <ItemAmount currentCount={count} id={id} />
                        <CardPrice price={price} oldPrice={oldPrice} className="w-4/12" />
                    </div>
                </div>
            </div>
        </div>
    );
};
