import { useState, useEffect } from "react";
import { ButtonRed } from "../button-red/button-blue";
import { ItemCard } from "./components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../utils";
import {
    getPopularProductList,
    setPopularProductList,
} from "../../store/popularProductSlice";

export const Popular = () => {
    const dispatch = useDispatch();
    const products = useSelector(getPopularProductList);

    useEffect(() => {
        request("/products/top").then(({ error, products }) => {
            if (error === null) {
                dispatch(setPopularProductList(products));
            }
        });
    }, [dispatch]);

    return (
        <div className="mb-[30px]">
            <h1 className="ml-[10px] mb-[15px]">Популярные товары</h1>
            <div className="flex w-[100%] justify-center mb-[15px] flex-wrap gap-3 ">
                {products.map(({ _id: id, name, price, sale, imageUrl }) => (
                    <ItemCard
                        key={id}
                        id={id}
                        name={name}
                        price={price}
                        sale={sale}
                        imageUrl={imageUrl}
                    />
                ))}
            </div>
            <div className="w-7/12 mx-auto sm:w-5/12 md:w-3/12">
                <Link to="/catalog">
                    <ButtonRed>перейти в каталог</ButtonRed>
                </Link>
            </div>
        </div>
    );
};
