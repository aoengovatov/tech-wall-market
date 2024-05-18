import { useState, useMemo, useEffect } from "react";
import { debounce } from "../../../../utils";
import { ButtonAdd } from "./components";
import { DEBOUNCE_DELAY_LIMIT } from "../../../../constants";
import { useDispatch } from "react-redux";
import { request } from "../../../../utils";
import { setBasketProductCount } from "../../../../store/basketSlice";

export const ItemAmount = ({ currentCount, id }) => {
    const [count, setCount] = useState(currentCount);
    const [shouldCount, setShouldCount] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        request(`/users/products`, "POST", { productId: id, count }).then(
            ({ error }) => {
                if (error === null) {
                    dispatch(setBasketProductCount({ id, count }));
                }
            }
        );
    }, [shouldCount]);

    const startDelayedSetCount = useMemo(
        () => debounce(setShouldCount, DEBOUNCE_DELAY_LIMIT),
        []
    );

    const onButtonClick = (value) => {
        let newCount = count + value;

        newCount < 1 ? (newCount = 1) : newCount;
        newCount > 99 ? (newCount = 99) : newCount;
        if (newCount !== count) {
            setCount(newCount);
            startDelayedSetCount(!shouldCount);
        }
    };

    return (
        <div className="flex items-center h-[26px] mr-[5px] min-[450px]:mr-[15px] rounded-xl bg-lightGray">
            <ButtonAdd src={"/src/assets/minus.png"} onClick={() => onButtonClick(-1)} />
            <div className="w-[28px] text-sm text-center">{count}</div>
            <ButtonAdd src={"/src/assets/plus.png"} onClick={() => onButtonClick(1)} />
        </div>
    );
};
