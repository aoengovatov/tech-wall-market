import {
    Breadcrumbs,
    ButtonBlue,
    Input,
    Textarea,
    TitleProfileWithBack,
} from "../../components";
import { request } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useParams, useMatch } from "react-router-dom";

export const AddProduct = () => {
    const navigate = useNavigate();
    const [serverError, setServerError] = useState("");
    const [categories, setCategories] = useState([]);
    const params = useParams();
    const isEdit = !!useMatch("/profile/edit-product/:id");
    const name = useRef("");
    const popular = useRef(false);
    const categoryId = useRef("");
    const imageUrl = useRef("");
    const sale = useRef(0);
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
        if (isEdit) {
            request(`/products/${params.id}`).then(({ product, error }) => {
                if (error === null) {
                    name.current.value = product.name;
                    popular.current.value = product.popular;
                    categoryId.current.value = product.category;
                    imageUrl.current.value = product.imageUrl;
                    price.current.value = product.price;
                    sale.current.value = product.sale;
                    count.current.value = product.count;
                    description.current.value = product.description;
                    characteristic.current.value = product.characteristic;
                }
            });
        }
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

    const updateProduct = () => {
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

        request(`/products/${params.id}`, "PATCH", product).then((data) => {
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

        return navigate(`/catalog/${params.id}`);
    };

    const redirectToProduct = () => {
        return navigate(`/catalog/${params.id}`);
    };

    return (
        <>
            {!isEdit && <Breadcrumbs />}
            <div className="mb-[20px] w-full">
                <TitleProfileWithBack>
                    {isEdit ? "Редактировать товар" : "Добавить товар"}
                </TitleProfileWithBack>

                {serverError && <div>{serverError}</div>}
                <form
                    onSubmit={isEdit ? updateProduct : addNewProduct}
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
                        {isEdit ? (
                            <>
                                <ButtonBlue type={"submit"}>сохранить</ButtonBlue>
                                <span className="ml-3">
                                    <ButtonBlue
                                        type={"button"}
                                        onClick={redirectToProduct}
                                    >
                                        отмена
                                    </ButtonBlue>
                                </span>
                            </>
                        ) : (
                            <ButtonBlue type={"submit"}>добавить</ButtonBlue>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
};
