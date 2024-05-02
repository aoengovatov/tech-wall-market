import { ButtonRed } from "../button-red/button-blue";
import { ItemCard } from "./components";
import { Link } from "react-router-dom";

export const Popular = () => {
    return (
        <div className="mb-[30px]">
            <h1 className="ml-[10px] mb-[15px]">Популярные товары</h1>
            <div className="flex w-[100%] justify-center mb-[15px] flex-wrap gap-3 ">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
            <div className="w-7/12 mx-auto sm:w-5/12 md:w-3/12">
                <Link to="/catalog">
                    <ButtonRed>перейти в каталог</ButtonRed>
                </Link>
            </div>
        </div>
    );
};
