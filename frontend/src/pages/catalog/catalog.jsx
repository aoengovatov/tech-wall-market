import { CategoryPanel, SortPanel } from "./components";
import { Breadcrumbs, ProductItem } from "../../components";
import { Pagination } from "../../components/pagination/pagination";
import { useEffect, useState } from "react";
import { request } from "../../utils";
import { setCategoryList } from "../../store/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import {
    getCategoryId,
    getPage,
    getSearchPhrase,
    getPriceSort,
} from "../../store/catalogSlice";
import { setBasketList } from "../../store/basketSlice";
import { PAGE_LIMIT } from "../../constants";
import { OWNER_PRODUCT_STATUS } from "../../constants";

export const Catalog = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [lastPage, setLastPage] = useState(0);
    const searchPhrase = useSelector(getSearchPhrase);
    const currentPage = useSelector(getPage);
    const categoryId = useSelector(getCategoryId);
    const priceSort = useSelector(getPriceSort);

    useEffect(() => {
        Promise.all([
            request("/categories").then((data) => {
                if (data.error === null) {
                    dispatch(setCategoryList(data.categories));
                }
            }),
            request(
                `/products?page=${currentPage}&limit=${PAGE_LIMIT}&category=${categoryId}&search=${searchPhrase}&priceSort=${priceSort}`
            ).then(({ lastPage, products }) => {
                setProducts(products);
                setLastPage(lastPage);
            }),
            request("/users/products").then(({ error, data }) => {
                if (error === null) {
                    const basketProducts = data.products.filter(
                        (product) => product.status === OWNER_PRODUCT_STATUS.BASKET
                    );
                    dispatch(setBasketList(basketProducts));
                }
            }),
        ]);
    }, [dispatch, searchPhrase, currentPage, categoryId, priceSort]);

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px]">
                <h1 className="ml-[10px] mb-[10px]">Каталог</h1>
                <div className="flex flex-col min-[1000px]:flex-row">
                    <div className="w-full min-[1000px]:w-3/12">
                        <CategoryPanel />
                    </div>
                    <div className="w-full min-[1000px]:w-9/12">
                        <div className="flex flex-col ml-[10px]">
                            <SortPanel />
                            {products?.length > 0 ? (
                                products.map(
                                    ({ _id: id, name, price, sale, imageUrl }) => (
                                        <ProductItem
                                            key={id}
                                            id={id}
                                            name={name}
                                            price={price}
                                            sale={sale}
                                            imageUrl={imageUrl}
                                        />
                                    )
                                )
                            ) : (
                                <div className="text-center text-[17px] my-5 font-medium">
                                    Товары не найдены
                                </div>
                            )}
                            <Pagination lastPage={lastPage} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
