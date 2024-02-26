import { CategoryCard } from "./components";

export const Categories = () => {
    return (
        <div className="mb-[30px]">
            <h1 className="ml-[10px] mb-[15px]">Категории</h1>
            <div className="flex w-full justify-around flex-wrap">
                <CategoryCard
                    src={"/src/assets/notebook-category-icon.png"}
                    color={"#FFFFCB"}
                >
                    Ноутбуки
                </CategoryCard>
                <CategoryCard
                    src={"/src/assets/smartphone-category-icon.png"}
                    color={"#C3FFED"}
                >
                    Смартфоны
                </CategoryCard>
                <CategoryCard
                    src={"/src/assets/consoles-category-icon.png"}
                    color={"#FEC5FF"}
                >
                    Игровые приставки
                </CategoryCard>
                <CategoryCard
                    src={"/src/assets/headphones-category-icon.png"}
                    color={"#C3C9FF"}
                >
                    Наушники
                </CategoryCard>

                <CategoryCard src={"/src/assets/tv-category-icon.png"} color={"#FFD3BA"}>
                    Телевизоры
                </CategoryCard>
                <CategoryCard
                    src={"/src/assets/smart-speaker-category-icon.png"}
                    color={"#FFADAD"}
                >
                    Умные колонки
                </CategoryCard>
                <CategoryCard
                    src={"/src/assets/tablet-category-icon.png"}
                    color={"#B3ECFF"}
                >
                    Планшеты
                </CategoryCard>
                <CategoryCard
                    src={"/src/assets/watch-category-icon.png"}
                    color={"#D4B1FF"}
                >
                    Смарт-часы
                </CategoryCard>
            </div>
        </div>
    );
};
