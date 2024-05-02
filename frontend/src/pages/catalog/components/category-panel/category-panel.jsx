import { Link } from "react-router-dom";
import { CategoryItem } from "../category-item/category-item";
import { useSelector } from "react-redux";
import { getCategory } from "../../../../store/categorySlice";

export const CategoryPanel = () => {
    const categories = useSelector(getCategory);

    return (
        <div className="flex flex-col w-full bg-lightGray p-[10px] mr-[10px] rounded-xl">
            {categories.map(({ id, name }) => (
                <CategoryItem key={id} url={`/catalog?category=${name}`}>
                    {name}
                </CategoryItem>
            ))}

            <Link
                to={"/catalog"}
                className="text-center px-[15px] py-[10px] text-blue rounded-lg hover:underline"
            >
                все категории
            </Link>
        </div>
    );
};
