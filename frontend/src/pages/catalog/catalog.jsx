import { CategoryPanel, SortPanel } from "./components";
import { Breadcrumbs, ProductItem } from "../../components";
import { Pagination } from "../../components/pagination/pagination";
import { useEffect } from "react";
import { request } from "../../utils";
import { setCategoryList } from "../../store/categorySlice";
import { useDispatch } from "react-redux";

export const Catalog = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        request("/categories").then((data) => {
            if (data.error === null) {
                dispatch(setCategoryList(data.categories));
            }
        });
    }, [dispatch]);

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
                            <ProductItem url={"/catalog/1"} />
                            <ProductItem url={"/catalog/1"} />
                            <ProductItem url={"/catalog/1"} />
                            <ProductItem url={"/catalog/1"} />
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
