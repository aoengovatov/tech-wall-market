import { Link } from "react-router-dom";

export const ProductCard = ({ id, name, price, productId, count, imageUrl }) => {
    return (
        <div className="flex flex-col justify-between p-[10px] bg-white rounded-xl min-h-[200px]">
            <div className="mb-[5px]">
                <div className="w-full">
                    <img src={imageUrl} className="h-[70px] mx-auto my-[14px]" />
                </div>

                <Link to={`/catalog/${productId}`} className="text-[14px] leading-3">
                    {name}
                </Link>
            </div>

            <div className="text-[18px] self-end">
                <div className="flex items-center">
                    <span>{count}</span>
                    <span className="mx-[5px] text-xs">х</span>
                    <span className="font-semibold">{price}</span>
                    <span className="font-semibold ml-[3px]">₽</span>
                </div>
            </div>
        </div>
    );
};
