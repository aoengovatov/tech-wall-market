import { Link, useNavigate } from "react-router-dom";
import {
    ButtonBlue,
    ButtonLike,
    CardPrice,
    SaleWidget,
    ProductCode,
    ButtonDelete,
} from "..";
import { request, saleCount } from "../../utils";
import { useSelector } from "react-redux";
import { getUserRole } from "../../store/userSlice";
import { ROLE } from "../../constants";

export const ProductItem = ({ likeButton = true, buttonDelete = false, ...props }) => {
    const paddingContentRight = buttonDelete ? 20 : 0;
    const navigate = useNavigate();
    const userRole = useSelector(getUserRole);

    let sale = 0;
    if (props.price && props.oldPrice) {
        sale = saleCount(props.price, props.oldPrice);
    }

    const mainContentStyle = `flex pr-[${paddingContentRight}px]`;

    const addOwnerProduct = (type) => {

        if (userRole === ROLE.GUEST) {
            return navigate("/login");
        }
        
        let status = "";

        switch (type) {
            case "basket":
                status = "BASKET";
                break;
            case "favorite":
                status = "FAVORITE";
                break;
            default:
        }

        const newOwnerProduct = {
            productId: props._id,
            status,
            count: 1,
        };

        request("/users/products", "POST", newOwnerProduct).then((data) => {
            console.log(data);
        });
    };

    return (
        <div className="flex flex-col w-full h-[160px] border-2 border-lightGray rounded-lg mb-[10px] p-[10px] pr-[${paddingBlockRight}px] transition-all duration-200 hover:border-lightBlue">
            <div className="flex justify-end">
                <SaleWidget count={sale} />
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
                                    <ButtonLike
                                        onClick={() => addOwnerProduct("favorite")}
                                    />
                                </div>
                            )}
                            <ButtonBlue onClick={() => addOwnerProduct("basket")}>
                                в корзину
                            </ButtonBlue>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
