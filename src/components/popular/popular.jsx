import { ItemCard } from "./components";

export const Popular = () => {
    return (
        <div className="mb-[30px]">
            <h1 className="ml-[10px] mb-[15px]">Популярные товары</h1>
            <div className="flex w-full justify-around">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    );
};
