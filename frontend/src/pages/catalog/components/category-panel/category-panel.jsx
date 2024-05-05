import { CategoryItem } from "../category-item/category-item";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../../store/categorySlice";
import { getCategoryId, setCategoryId } from "../../../../store/catalogSlice";

export const CategoryPanel = () => {
    const dispatch = useDispatch();
    const categoryList = useSelector(getCategory);
    const currentCategoryId = useSelector(getCategoryId);

    const onSelectCategory = (id) => {
        dispatch(setCategoryId(id));
    };

    return (
        <div className="flex flex-col w-full bg-lightGray p-[10px] mr-[10px] gap-y-1 rounded-xl">
            {categoryList.map(({ id, name }) => (
                <CategoryItem
                    key={id}
                    id={id}
                    onSelectCategory={onSelectCategory}
                    currentCategoryId={currentCategoryId}
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
