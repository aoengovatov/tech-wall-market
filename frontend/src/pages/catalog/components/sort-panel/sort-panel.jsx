import { useDispatch, useSelector } from "react-redux";
import {
    getSearchPhrase,
    getPriceSort,
    setSearchPhrase,
    setPriceSort,
} from "../../../../store/catalogSlice";

export const SortPanel = () => {
    const dispatch = useDispatch();
    const currentPriceSort = useSelector(getPriceSort);
    const currentSearchPhrase = useSelector(getSearchPhrase);

    const onSortChange = ({ target }) => {
        dispatch(setPriceSort(target.value));
    };

    const onSearchPhraseChange = ({ target }) => {
        dispatch(setSearchPhrase(target.value));
    };

    return (
        <div className="flex justify-end mb-[15px]">
            <select
                value={currentPriceSort}
                onChange={(target) => onSortChange(target)}
                className="outline-none text-darkGray border-2 px-[7px] py-[3px] border-gray rounded-lg mr-[10px] focus:border-blue"
            >
                <option value={true}>сначала дешевле</option>
                <option value={false}>сначала дороже</option>
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
