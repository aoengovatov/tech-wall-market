import { CategoryCard } from "./components";

export const Categories = ({ edit, categories }) => {
    return (
        <div className="mb-[30px]">
            <h1 className="ml-[10px] mb-[15px]">Категории</h1>
            <div className="flex w-full justify-left flex-wrap gap-[12px]">
                {categories.map(({ id, name, imageUrl, color }) => (
                    <CategoryCard key={id} src={imageUrl} color={color} edit={edit}>
                        {name}
                    </CategoryCard>
                ))}
            </div>
        </div>
    );
};
