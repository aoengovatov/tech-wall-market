import { Breadcrumbs, ButtonBlue, Input, Textarea, BackBtn } from "../../components";
import { request } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export const AddProduct = () => {
    const navigate = useNavigate();
    const [serverError, setServerError] = useState("");
    const [categories, setCategories] = useState([]);
    const name = useRef("");
    const categoryId = useRef("");
    const imageUrl = useRef("");
    const oldPrice = useRef(0);
    const price = useRef(0);
    const count = useRef(0);
    const description = useRef("");
    const characteristic = useRef("");

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
            oldPrice: oldPrice.current.value,
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
            console.log("Создан продукт", data.product);
            name.current.value = "";
            categoryId.current.value = "";
            imageUrl.current.value = "";
            oldPrice.current.value = 0;
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
                        placeholder={"название товара..."}
                        required={true}
                    />
                    <select
                        ref={categoryId}
                        onChange={() => setServerError("")}
                        className="outline-none text-darkGray px-[10px] py-[5px] border-2 border-transparent bg-lightGray rounded-lg focus:border-blue"
                    >
                        {categories.map(({ id, name }) => (
                            <option key={id} value={id}>
                                {name}
                            </option>
                        ))}
                    </select>
                    <Input
                        type={"text"}
                        onChange={() => setServerError("")}
                        ref={imageUrl}
                        placeholder={"url картинки..."}
                        required={true}
                    />
                    <Input
                        type={"number"}
                        onChange={() => setServerError("")}
                        ref={oldPrice}
                        placeholder={"цена со скидкой"}
                    />
                    <Input
                        type={"number"}
                        onChange={() => setServerError("")}
                        ref={price}
                        placeholder={"цена без скидки"}
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
                        placeholder={"Описание товара"}
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
