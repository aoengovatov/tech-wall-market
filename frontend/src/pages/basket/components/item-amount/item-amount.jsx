import { useState } from "react";
import { ButtonAdd } from "./components";
import { useDispatch } from "react-redux";
import { setBasketProductCount } from "../../../../store/basketSlice";

export const ItemAmount = ({ currentCount, id }) => {
    const [count, setCount] = useState(currentCount);
    const dispatch = useDispatch();

    const onButtonClick = (value) => {
        let newCount = count + value;

        newCount < 1 ? (newCount = 1) : newCount;
        newCount > 99 ? (newCount = 99) : newCount;
        if (newCount !== count) {
            dispatch(setBasketProductCount({ id, count: newCount }));
            setCount(newCount);
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
