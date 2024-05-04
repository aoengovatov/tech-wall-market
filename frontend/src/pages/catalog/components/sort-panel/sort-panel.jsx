import { useDispatch, useSelector } from "react-redux";
import { getSortPrice, setSortPrice } from "../../../../store/searchProductSlice";

export const SortPanel = () => {
    const dispatch = useDispatch();
    const currentSortValue = useSelector(getSortPrice);

    const onSortChange = ({ target }) => {
        dispatch(setSortPrice(target.value));
    };

    return (
        <div className="flex justify-end mb-[15px]">
            <select
                value={currentSortValue}
                onChange={(target) => onSortChange(target)}
                className="outline-none text-darkGray border-2 px-[7px] py-[3px] border-gray rounded-lg mr-[10px] focus:border-blue"
            >
                <option value="1">сначала дешевле</option>
                <option value="-1">сначала дороже</option>
            </select>
            <input
                className="outline-none text-darkGray px-[7px] py-[3px] border-2 border-gray rounded-lg focus:border-blue"
                type="text"
                placeholder="поиск..."
            ></input>
        </div>
    );
};
