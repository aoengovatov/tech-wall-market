import { CategoryPanel, SortPanel } from "./components";
import { Breadcrumbs, ProductItem } from "../../components";
import { Pagination } from "../../components/pagination/pagination";
import { useEffect, useState } from "react";
import { request } from "../../utils";
import { setCategoryList } from "../../store/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { getPage, getSearchPhrase } from "../../store/searchProductSlice";
import { PAGE_LIMIT } from "../../constants";

export const Catalog = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [lastPage, setLastPage] = useState(0);
    const searchPhrase = useSelector(getSearchPhrase);
    const currentPage = useSelector(getPage);

    useEffect(() => {
        request("/categories").then((data) => {
            if (data.error === null) {
                dispatch(setCategoryList(data.categories));
            }
        });
        request(
            `/products?page=${currentPage}&limit=${PAGE_LIMIT}&search=${searchPhrase}`
        ).then(({ lastPage, products }) => {
            setProducts(products);
            setLastPage(lastPage);
        });
    }, [dispatch, searchPhrase, currentPage]);

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
                            {products.map((product) => (
                                <ProductItem key={product.id} {...product} />
                            ))}
                            <Pagination lastPage={lastPage} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
