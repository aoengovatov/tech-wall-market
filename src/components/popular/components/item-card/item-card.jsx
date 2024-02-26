export const ItemCard = () => {
    return (
        <div className="flex flex-col items-center justify-around w-[250px] min-h-[315px] border-2 border-gray rounded-xl h-[100px] p-[15px]">
            <img src="/src/assets/item-logo-min.png" className="w-[185px]"></img>
            <div className="leading-5">
                15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space Gray(Космический
                серый)
            </div>
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                    <div className="text-xl font-semibold leading-5">149990 ₽</div>
                    <div className="text-l line-through leading-5 text-garkGray">
                        189990 ₽
                    </div>
                </div>
                <button className="border-0 bg-blue text-white px-[17px] h-[40px] rounded-xl">
                    в корзину
                </button>
            </div>
        </div>
    );
};
