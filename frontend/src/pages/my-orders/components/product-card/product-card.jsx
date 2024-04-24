import { Link } from "react-router-dom";

export const ProductCard = ({ id, name, price, count, imageUrl }) => {
    return (
        <div className="flex flex-col p-[10px] bg-white rounded-xl w-[170px] hmin-[140px]">
            <img src={imageUrl} className="h-[70px] mx-[20px] mb-[10px]"></img>
            <Link to={`/catalog/${id}`} className="text-xs mb-[5px] font-normal">
                {name}
            </Link>
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
