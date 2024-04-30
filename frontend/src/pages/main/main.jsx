import { Popular, Banner, Categories, Brands } from "../../components";
import { useState, useEffect } from "react";
import { request } from "../../utils";

export const Main = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        request("/categories").then(({ categories }) => {
            setCategories(categories);
        });
    }, []);

    return (
        <>
            <Banner />
            <Popular />
            <Categories categories={categories} edit={false} />
            <Brands />
        </>
    );
};
