import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getSearchPhrase,
    getPriceSort,
    setSearchPhrase,
    setPriceSort,
} from "../../../../store/catalogSlice";
import { DEBOUNCE_DELAY_LIMIT } from "../../../../constants";
import { debounce } from "../../../../utils";

export const SortPanel = () => {
    const dispatch = useDispatch();
    const [shouldSort, setShouldSort] = useState(false);
    const [updateSort, setUpdateSort] = useState(useSelector(getPriceSort));
    const [shouldSearch, setShouldSearch] = useState(false);
    const [updateSearch, setUpdateSearch] = useState(useSelector(getSearchPhrase));

    useEffect(() => {
        dispatch(setPriceSort(updateSort));
    }, [shouldSort]);

    useEffect(() => {
        dispatch(setSearchPhrase(updateSearch));
    }, [shouldSearch]);

    const startDelayedSetSort = useMemo(
        () => debounce(setShouldSort, DEBOUNCE_DELAY_LIMIT),
        []
    );

    const onSortChange = ({ target }) => {
        setUpdateSort(target.value);
        startDelayedSetSort(!shouldSort);
    };

    const startDelayedSetSearch = useMemo(
        () => debounce(setShouldSearch, DEBOUNCE_DELAY_LIMIT),
        []
    );

    const onSearchPhraseChange = ({ target }) => {
        setUpdateSearch(target.value)
        startDelayedSetSearch(!shouldSearch)
    };

    return (
        <div className="flex flex-col justify-end items-end mb-[10px] min-[450px]:flex-row">
            <select
                value={updateSort}
                onChange={(target) => onSortChange(target)}
                className="outline-none text-darkGray border-2 px-[7px] py-[3px] border-gray rounded-lg mr-0 mb-[5px] focus:border-blue min-[450px]:mr-[10px] min-[450px]:mb-0"
            >
                <option value={true}>сначала дешевле</option>
                <option value={false}>сначала дороже</option>
            </select>
            <input
                value={updateSearch}
                onChange={(target) => onSearchPhraseChange(target)}
                className="outline-none text-darkGray px-[7px] py-[3px] border-2 border-gray rounded-lg focus:border-blue"
                type="text"
                placeholder="поиск..."
            ></input>
        </div>
    );
};
