export const ProductCard = () => {
    return (
        <div className="flex flex-col p-[10px] bg-white rounded-xl w-[170px] hmin-[140px]">
            <img
                src="/src/assets/item-logo-min.png"
                className="h-[70px] mx-[20px] mb-[10px]"
            ></img>
            <div className="text-xs mb-[5px] font-semibold">
                15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб, Space Gray(Космический
                серый)
            </div>
            <div className="text-[18px] self-end">
                <div className="flex items-center">
                    <span>10</span>
                    <span className="mx-[5px] text-xs">х</span>
                    <span className="font-semibold">199990</span>
                    <span className="font-semibold ml-[3px]">₽</span>
                </div>
            </div>
        </div>
    );
};
