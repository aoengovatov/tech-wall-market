import { useMemo, useEffect, useState } from "react";
import { debounce } from "../../../../utils";
import { CategoryItem } from "../category-item/category-item";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../../store/categorySlice";
import { getCategoryId, setCategoryId } from "../../../../store/catalogSlice";
import { DEBOUNCE_DELAY_LIMIT } from "../../../../constants";

export const CategoryPanel = () => {
    const dispatch = useDispatch();
    const [shouldCategory, setShouldCategory] = useState(false);
    const [catId, setCatId] = useState("");
    const categoryList = useSelector(getCategory);
    const currentCategoryId = useSelector(getCategoryId);

    useEffect(() => {
        dispatch(setCategoryId(catId));
    }, [shouldCategory]);

    const startDelayedSetCategory = useMemo(
        () => debounce(setShouldCategory, DEBOUNCE_DELAY_LIMIT),
        []
    );

    const onSelectCategory = (id) => {
        setCatId(id);
        startDelayedSetCategory(!shouldCategory);
    };

    return (
        <div className="flex flex-row justify-center flex-wrap w-full bg-lightGray p-[10px] mb-[10px] mr-0 gap-y-1 rounded-xl min-[1000px]:flex-col min-[1000px]:mr-[10px] min-[1000px]:mb-[10px]">
            {categoryList.map(({ id, name }) => (
                <CategoryItem
                    key={id}
                    id={id}
                    onSelectCategory={() => onSelectCategory(id)}
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
