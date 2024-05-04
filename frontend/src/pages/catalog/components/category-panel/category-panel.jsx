import { CategoryItem } from "../category-item/category-item";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../../store/categorySlice";
import { getCategoryName, setCategoryName } from "../../../../store/searchProductSlice";

export const CategoryPanel = () => {
    const dispatch = useDispatch();
    const categoryList = useSelector(getCategory);
    const currentCategory = useSelector(getCategoryName);

    const onSelectCategory = (name) => {
        dispatch(setCategoryName(name));
    };

    return (
        <div className="flex flex-col w-full bg-lightGray p-[10px] mr-[10px] gap-y-1 rounded-xl">
            {categoryList.map(({ id, name }) => (
                <CategoryItem
                    key={id}
                    onSelectCategory={onSelectCategory}
                    currentCategory={currentCategory}
                >
                    {name}
                </CategoryItem>
            ))}

            <div
                onClick={() => onSelectCategory("")}
                className="text-center px-[15px] py-[10px] cursor-pointer text-blue rounded-lg hover:underline"
            >
                все категории
            </div>
        </div>
    );
};
