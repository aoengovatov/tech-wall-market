import { useState } from "react";
import { Breadcrumbs, ButtonBlue, Input, Categories, ErrorBlock } from "../../components";
import { request } from "../../utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryList, getCategory, addCategory } from "../../store/categorySlice";

export const AddCategory = () => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [serverError, setServerError] = useState("");
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [color, setColor] = useState("");

    useEffect(() => {
        request("/categories").then(({ categories }) => {
            dispatch(setCategoryList(categories));
        });
    }, []);

    const categories = useSelector(getCategory);

    const onChangeColor = ({ target }) => {
        setColor(target.value);
    };

    const onChangeName = ({ target }) => {
        setName(target.value);
    };

    const onChangeImageUrl = ({ target }) => {
        setImageUrl(target.value);
    };

    const addNewCategory = (event) => {
        event.preventDefault();
        request("/categories", "POST", { name, imageUrl, color }).then(
            ({ error, category }) => {
                if (error) {
                    setServerError(`Ошибка: ${error}`);
                    return;
                }
                setName("");
                setColor("");
                setImageUrl("");
                dispatch(addCategory(category));
            }
        );
    };

    const updateCategory = () => {
        console.log("Обновление категории");
    };

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[20px]">
                <h1 className="ml-[10px] mb-[10px]">
                    {edit ? "Редактировать категорию" : "Добавить категорию"}
                </h1>
                <form
                    onSubmit={edit ? updateCategory : addNewCategory}
                    className="flex mb-[10px] gap-[12px]"
                >
                    <Input
                        type={"text"}
                        placeholder={"название категории..."}
                        value={name}
                        required={true}
                        onChange={(target) => onChangeName(target)}
                    />
                    <Input
                        type={"text"}
                        placeholder={"url логотипа..."}
                        value={imageUrl}
                        required={true}
                        onChange={(target) => onChangeImageUrl(target)}
                    />
                    <Input
                        type={"color"}
                        placeholder={"цвет плашки"}
                        value={color}
                        onChange={(target) => onChangeColor(target)}
                    />

                    {edit ? (
                        <>
                            <ButtonBlue>сохранить</ButtonBlue>
                            <ButtonBlue onClick={() => setEdit(false)}>отмена</ButtonBlue>
                        </>
                    ) : (
                        <ButtonBlue type={"submit"}>добавить</ButtonBlue>
                    )}
                </form>
                {serverError && <ErrorBlock>{serverError}</ErrorBlock>}

                <div className="mt-[20px]">
                    <Categories edit={true} categories={categories} />
                </div>
            </div>
        </>
    );
};
