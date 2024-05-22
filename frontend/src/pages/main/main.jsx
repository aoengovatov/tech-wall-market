import { Popular, Banner, Categories, Brands } from "../../components";
import { useState, useEffect } from "react";
import { request } from "../../utils";
import bannerImage from "../../assets/banner.png";

export const Main = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        request("/categories").then(({ categories }) => {
            setCategories(categories);
        });
    }, []);

    return (
        <>
            <Banner imageUrl={bannerImage} />
            <Popular />
            <Categories categories={categories} edit={false} />
            <Brands />
        </>
    );
};
