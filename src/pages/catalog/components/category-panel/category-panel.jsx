import { Link } from "react-router-dom";
import { CategoryItem } from "../category-item/category-item";

export const CategoryPanel = () => {
    return (
        <div className="flex flex-col w-full bg-lightGray p-[10px] mr-[10px] rounded-xl">
            <CategoryItem url={"/catalog"}>Ноутбуки</CategoryItem>
            <CategoryItem url={"/catalog"}>Смартфоны</CategoryItem>
            <CategoryItem url={"/catalog"}>Игрровые приставки</CategoryItem>
            <CategoryItem url={"/catalog"}>Наушники</CategoryItem>
            <CategoryItem url={"/catalog"}>Телевизоры</CategoryItem>
            <CategoryItem url={"/catalog"}>Умные колонки</CategoryItem>
            <CategoryItem url={"/catalog"}>Планшеты</CategoryItem>
            <CategoryItem url={"/catalog"}>Смарт-часы</CategoryItem>
            <Link
                to={"/catalog"}
                className="text-center px-[15px] py-[10px] text-blue rounded-lg hover:bg-gray"
            >
                все категории
            </Link>
        </div>
    );
};
