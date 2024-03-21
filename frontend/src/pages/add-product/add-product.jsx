import { Breadcrumbs, ButtonBlue, Input, Textarea } from "../../components";

export const AddProduct = () => {
    return (
        <>
            <Breadcrumbs />
            <div className="mb-[20px] max-w-[50%]">
                <h1 className="ml-[10px] mb-[10px]">Добавить товар</h1>
                <div className="flex flex-col mb-[30px]">
                    <Input
                        type={"text"}
                        placeholder={"название товара..."}
                        required={true}
                    />
                    <select className="outline-none text-darkGray px-[10px] py-[5px] mb-[5px] border-2 border-transparent bg-lightGray rounded-lg focus:border-blue">
                        <option selected disabled hidden>
                            категория товара
                        </option>
                        <option>ноутбуки</option>
                        <option>смартфоны</option>
                        <option>телевизоры</option>
                        <option>смарт-часы</option>
                        <option>умные колонки</option>
                    </select>
                    <Input type={"text"} placeholder={"url картинки..."} />
                    <Input type={"text"} placeholder={"цена со скидкой"} />
                    <Input type={"text"} placeholder={"цена без скидки"} />
                    <Input type={"text"} placeholder={"количество товара"} />
                    <Textarea placeholder={"Описание товара"} />
                    <Textarea placeholder={"характеристики товара"} />
                    <ButtonBlue>добавить</ButtonBlue>
                </div>
            </div>
        </>
    );
};
