import { ButtonRed } from "../button-red/button-blue";
import { ItemCard } from "./components";
import { Link } from "react-router-dom";

export const Popular = () => {
    return (
        <div className="mb-[30px]">
            <h1 className="ml-[10px] mb-[15px]">Популярные товары</h1>
            <div className="flex w-full justify-around mb-[15px]">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
            <div className="w-3/12 mx-auto">
                <Link to="/catalog">
                    <ButtonRed>перейти в каталог</ButtonRed>
                </Link>
            </div>
        </div>
    );
};
