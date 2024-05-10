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
import { PAGE_LIMIT } from "../../constants";

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
        ]);
    }, [dispatch, searchPhrase, currentPage, categoryId, priceSort]);

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px]">
                <h1 className="ml-[10px] mb-[10px]">Каталог</h1>
                <div className="flex">
                    <div className="flex flex-col w-3/12">
                        <CategoryPanel />
                    </div>
                    <div className="w-9/12">
                        <div className="flex flex-col ml-[10px]">
                            <SortPanel />
                            {products.map(
                                ({ _id: id, name, price, oldPrice, imageUrl }) => (
                                    <ProductItem
                                        key={id}
                                        id={id}
                                        name={name}
                                        price={price}
                                        oldPrice={oldPrice}
                                        imageUrl={imageUrl}
                                    />
                                )
                            )}
                            <Pagination lastPage={lastPage} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
