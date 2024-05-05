import { useDispatch, useSelector } from "react-redux";
import {
    getSearchPhrase,
    getSortPrice,
    setSearchPhrase,
    setSortPrice,
} from "../../../../store/catalogSlice";

export const SortPanel = () => {
    const dispatch = useDispatch();
    const currentSort = useSelector(getSortPrice);
    const currentSearchPhrase = useSelector(getSearchPhrase);

    const onSortChange = ({ target }) => {
        dispatch(setSortPrice(target.value));
    };

    const onSearchPhraseChange = ({ target }) => {
        dispatch(setSearchPhrase(target.value));
    };

    return (
        <div className="flex justify-end mb-[15px]">
            <select
                value={currentSort}
                onChange={(target) => onSortChange(target)}
                className="outline-none text-darkGray border-2 px-[7px] py-[3px] border-gray rounded-lg mr-[10px] focus:border-blue"
            >
                <option value="1">сначала дешевле</option>
                <option value="-1">сначала дороже</option>
            </select>
            <input
                value={currentSearchPhrase}
                onChange={(target) => onSearchPhraseChange(target)}
                className="outline-none text-darkGray px-[7px] py-[3px] border-2 border-gray rounded-lg focus:border-blue"
                type="text"
                placeholder="поиск..."
            ></input>
        </div>
    );
};
