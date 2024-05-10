import { Link, useNavigate } from "react-router-dom";
import {
    ButtonBlue,
    ButtonLike,
    CardPrice,
    SaleWidget,
    ProductCode,
    ButtonDelete,
} from "..";
import { request, oldPriceCount } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { getUserRole } from "../../store/userSlice";
import { ROLE } from "../../constants";
import { setBasketList } from "../../store/basketSlice";
import { setFavoriteList } from "../../store/favoriteSlice";
import { OWNER_PRODUCT_STATUS } from "../../constants";

export const ProductItem = ({
    likeButton = true,
    buttonDelete = false,
    id,
    name,
    price,
    sale,
    imageUrl,
}) => {
    const paddingContentRight = buttonDelete ? 20 : 0;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userRole = useSelector(getUserRole);

    let oldPrice = 0;
    if (sale > 0) {
        oldPrice = oldPriceCount(price, sale);
    }

    const addOwnerProduct = (status) => {
        if (userRole === ROLE.GUEST) {
            return navigate("/login");
        }

        const newOwnerProduct = {
            productId: id,
            status,
            count: 1,
        };

        request("/users/products", "POST", newOwnerProduct).then(({ error, data }) => {
            if (error === null) {
                const favoriteProducts = data.products.filter(
                    (product) => product.status === OWNER_PRODUCT_STATUS.FAVORITE
                );
                dispatch(setFavoriteList(favoriteProducts));

                const basketProducts = data.products.filter(
                    (product) => product.status === OWNER_PRODUCT_STATUS.BASKET
                );
                dispatch(setBasketList(basketProducts));
            }
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
            <div className={`flex pr-[${paddingContentRight}px]`}>
                <div className="flex min-w-[200px] justify-center">
                    <img src={imageUrl} className="h-[100px] mx-[20px]"></img>
                </div>

                <div className="flex flex-col w-full h-full justify-around">
                    <div className="flex justify-between">
                        <Link
                            to={`/catalog/${id}`}
                            className="font-semibold text-base w-8/12"
                        >
                            {name}
                        </Link>
                        <CardPrice price={price} oldPrice={oldPrice} />
                    </div>

                    <div className="flex items-end justify-between">
                        <div className="w-8/12">
                            <ProductCode>{id.slice(-8)}</ProductCode>
                        </div>
                        <div className="flex">
                            {likeButton && (
                                <div className="mr-[5px]">
                                    <ButtonLike
                                        onClick={() =>
                                            addOwnerProduct(OWNER_PRODUCT_STATUS.FAVORITE)
                                        }
                                    />
                                </div>
                            )}
                            <ButtonBlue
                                onClick={() =>
                                    addOwnerProduct(OWNER_PRODUCT_STATUS.BASKET)
                                }
                            >
                                в корзину
                            </ButtonBlue>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
