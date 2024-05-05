import { Link } from "react-router-dom";
import {
    ButtonBlue,
    ButtonLike,
    CardPrice,
    SaleWidget,
    ProductCode,
    ButtonDelete,
} from "..";

export const ProductItem = ({ likeButton = true, buttonDelete = false, ...props }) => {
    const paddingContentRight = buttonDelete ? 20 : 0;

    let saleCount = 0;
    if (props.price && props.oldPrice) {
        saleCount = Math.floor(100 - (props.price * 100) / props.oldPrice);
    }

    const mainContentStyle = `flex pr-[${paddingContentRight}px]`;

    return (
        <div className="flex flex-col w-full h-[160px] border-2 border-lightGray rounded-lg mb-[10px] p-[10px] pr-[${paddingBlockRight}px] transition-all duration-200 hover:border-lightBlue">
            <div className="flex justify-end">
                <SaleWidget count={saleCount} />
                {buttonDelete && (
                    <div className="ml-[10px]">
                        <ButtonDelete />
                    </div>
                )}
            </div>
            <div className={mainContentStyle}>
                <img src={props.imageUrl} className="h-[100px] mx-[20px]"></img>

                <div className="flex flex-col w-full h-full justify-around">
                    <div className="flex justify-between">
                        <Link
                            to={`/catalog/${props._id}`}
                            className="font-semibold text-base w-8/12"
                        >
                            {props.name}
                        </Link>
                        <CardPrice price={props.price} oldPrice={props.oldPrice} />
                    </div>

                    <div className="flex items-end justify-between">
                        <div className="w-8/12">
                            <ProductCode>{props._id.slice(-8)}</ProductCode>
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
