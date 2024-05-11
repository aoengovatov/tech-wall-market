import { Breadcrumbs, ButtonBlue, Input, Textarea, BackBtn } from "../../components";
import { request } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export const AddProduct = () => {
    const navigate = useNavigate();
    const [serverError, setServerError] = useState("");
    const [categories, setCategories] = useState([]);
    const name = useRef("");
    const popular = useRef(false);
    const categoryId = useRef("");
    const imageUrl = useRef("");
    const sale = useRef(0);
    const price = useRef(0);
    const count = useRef(0);
    const description = useRef("");
    const characteristic = useRef("");

    /*
    name.current.value = "Новое имя";
    popular.current.value = true;
    categoryId.current.value = "6633687fa32479cbba02ba60";
    imageUrl.current.value = '123'
    sale.current.value = 20;
    */

    useEffect(() => {
        request("/categories").then((data) => {
            if (data.error === null) {
                setCategories(data.categories);
            }
        });
    }, []);

    const addNewProduct = (event) => {
        event.preventDefault();

        const product = {
            name: name.current.value,
            category: categoryId.current.value,
            imageUrl: imageUrl.current.value,
            sale: sale.current.value,
            popular: popular.current.value,
            price: price.current.value,
            count: count.current.value,
            description: description.current.value,
            characteristic: characteristic.current.value,
        };

        request("/products", "POST", product).then((data) => {
            if (data.error) {
                setServerError(`Ошибка: ${data.error}`);
                return;
            }
            name.current.value = "";
            categoryId.current.value = "";
            imageUrl.current.value = "";
            sale.current.value = 0;
            popular.current.value = false;
            price.current.value = 0;
            count.current.value = 0;
            description.current.value = "";
            characteristic.current.value = "";
        });
    };

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[20px] w-full">
                <div className="flex items-center mb-[10px]">
                    <BackBtn onClick={() => navigate(-1)} />
                    <h1 className="ml-[10px]">Добавить товар</h1>
                </div>
                {serverError && <div>{serverError}</div>}
                <form
                    onSubmit={addNewProduct}
                    className="flex md:w-[60%] w-full mx-auto flex-col mb-[30px] gap-y-1 "
                >
                    <Input
                        type={"text"}
                        onChange={() => setServerError("")}
                        ref={name}
                        placeholder={"название товара"}
                        required={true}
                    />
                    <div className="flex w-full justify-between items-center">
                        <label className="min-w-fit mr-2">Популярный товар:</label>
                        <select
                            ref={popular}
                            placeholder={"популярный товар"}
                            onChange={() => setServerError("")}
                            className="outline-none w-full text-darkGray px-[10px] py-[5px] border-2 border-transparent bg-lightGray rounded-lg focus:border-blue"
                        >
                            <option value={false}>нет</option>
                            <option value={true}>да</option>
                        </select>
                    </div>

                    <div className="flex w-full justify-between items-center">
                        <label className="min-w-fit mr-2">Категория:</label>
                        <select
                            ref={categoryId}
                            onChange={() => setServerError("")}
                            className="outline-none w-full text-darkGray px-[10px] py-[5px] border-2 border-transparent bg-lightGray rounded-lg focus:border-blue"
                        >
                            {categories.map(({ id, name }) => (
                                <option key={id} value={id}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <Input
                        type={"text"}
                        onChange={() => setServerError("")}
                        ref={imageUrl}
                        placeholder={"url картинки"}
                        required={true}
                    />
                    <Input
                        type={"number"}
                        onChange={() => setServerError("")}
                        ref={price}
                        placeholder={"цена"}
                    />
                    <Input
                        type={"number"}
                        min={0}
                        max={100}
                        onChange={() => setServerError("")}
                        ref={sale}
                        placeholder={"скидка, %"}
                        required={true}
                    />
                    <Input
                        type={"number"}
                        onChange={() => setServerError("")}
                        ref={count}
                        placeholder={"количество товара"}
                        required={true}
                    />
                    <Textarea
                        ref={description}
                        onChange={() => setServerError("")}
                        placeholder={"описание товара"}
                        required={true}
                    />
                    <Textarea
                        ref={characteristic}
                        onChange={() => setServerError("")}
                        placeholder={"характеристики товара"}
                        required={true}
                    />
                    <div className="self-end">
                        <ButtonBlue type={"submit"}>добавить</ButtonBlue>
                    </div>
                </form>
            </div>
        </>
    );
};
