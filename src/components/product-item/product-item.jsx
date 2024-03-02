import { Link } from "react-router-dom";
import {
    ButtonBlue,
    ButtonLike,
    CardPrice,
    SaleWidget,
    ProductCode,
    ButtonDelete,
} from "..";

export const ProductItem = ({ url, likeButton = true, buttonDelete = false }) => {
    const paddingContentRight = buttonDelete ? 20 : 0;

    const mainContentStyle = `flex pr-[${paddingContentRight}px]`;

    return (
        <div className="flex flex-col w-full h-[160px] border-2 border-lightGray rounded-lg mb-[10px] p-[10px] pr-[${paddingBlockRight}px] transition-all duration-200 hover:border-lightBlue">
            <div className="flex justify-end">
                <SaleWidget count={30} />
                {buttonDelete && (
                    <div className="ml-[10px]">
                        <ButtonDelete />
                    </div>
                )}
            </div>
            <div className={mainContentStyle}>
                <img
                    src="/src/assets/item-logo-min.png"
                    className="h-[100px] mx-[20px]"
                ></img>

                <div className="flex flex-col w-full h-full justify-around">
                    <div className="flex justify-between">
                        <Link to={url} className="font-semibold text-base w-8/12">
                            15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space
                            Gray(Космический серый)
                        </Link>
                        <CardPrice price={149900} oldPrice={189900} />
                    </div>

                    <div className="flex items-end justify-between">
                        <div className="w-8/12">
                            <ProductCode>ir1785</ProductCode>
                        </div>
                        <div className="flex">
                            {likeButton && (
                                <div className="mr-[5px]">
                                    <ButtonLike />
                                </div>
                            )}
                            <ButtonBlue>в корзину</ButtonBlue>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
