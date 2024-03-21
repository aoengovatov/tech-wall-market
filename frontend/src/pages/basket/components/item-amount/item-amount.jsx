import { useState } from "react";
import { ButtonAdd } from "./components";

export const ItemAmount = () => {
    const [count, setCount] = useState(1);

    const onButtonClick = (value) => {
        console.log("клик", value);
        let newCount = count + value;
        console.log(newCount);

        newCount < 1 ? (newCount = 1) : newCount;
        newCount > 99 ? (newCount = 99) : newCount;
        setCount(newCount);
    };

    return (
        <div className="flex items-center h-[26px] mr-[20px] rounded-xl bg-lightGray">
            <ButtonAdd src={"/src/assets/minus.png"} onClick={() => onButtonClick(-1)} />
            <div className="w-[28px] text-sm text-center">{count}</div>
            <ButtonAdd src={"/src/assets/plus.png"} onClick={() => onButtonClick(1)} />
        </div>
    );
};
