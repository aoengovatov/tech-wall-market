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
        <div className="flex flex-col justify-end items-end mb-[10px] min-[450px]:flex-row">
            <select
                value={currentPriceSort}
                onChange={(target) => onSortChange(target)}
                className="outline-none text-darkGray border-2 px-[7px] py-[3px] border-gray rounded-lg mr-0 mb-[5px] focus:border-blue min-[450px]:mr-[10px] min-[450px]:mb-0"
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
