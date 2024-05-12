import { useState } from "react";
import { useParams, useMatch, useNavigate } from "react-router-dom";
import {
    Breadcrumbs,
    ButtonBlue,
    Input,
    Categories,
    ErrorBlock,
    TitleProfileWithBack,
} from "../../components";
import { request } from "../../utils";
import { useEffect } from "react";
import { setOpenModal } from "../../store/modalSlice";
import { deleteCategory } from "../../store/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import {
    setCategoryList,
    getCategory,
    addCategory,
    updateCategory,
} from "../../store/categorySlice";

export const AddCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const isEdit = !!useMatch("/profile/category/:id/edit");
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

    useEffect(() => {
        const categoryUpdate = categories.filter(
            (category) => category.id === params.id
        )[0];
        if (categoryUpdate) {
            setName(categoryUpdate.name);
            setImageUrl(categoryUpdate.imageUrl);
            setColor(categoryUpdate.color);
        }
    }, [params.id]);

    const onChangeColor = ({ target }) => {
        setColor(target.value);
        setServerError("");
    };

    const onChangeName = ({ target }) => {
        setName(target.value);
        setServerError("");
    };

    const onChangeImageUrl = ({ target }) => {
        setImageUrl(target.value);
        setServerError("");
    };

    const onCancelUpdate = () => {
        setName("");
        setColor("");
        setImageUrl("");
        navigate("/profile/category");
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

    const updateCategoryData = (event) => {
        event.preventDefault();
        request(`/categories/${params.id}`, "PATCH", { name, imageUrl, color }).then(
            ({ error, category }) => {
                if (error) {
                    setServerError(`Ошибка: ${error}`);
                    return;
                }
                setName("");
                setColor("");
                setImageUrl("");
                dispatch(updateCategory(category));
                navigate("/profile/category");
            }
        );
    };

    const deleteCategoryById = (id) => {
        request(`/categories/${id}`, "DELETE").then(({ error }) => {
            if (error) {
                setServerError(error);
                return;
            }
            dispatch(deleteCategory(id));
        });
    };

    const onDeleteCategory = (id, name) => {
        const modalWindow = {
            isOpen: true,
            text: `Вы точно хотите удалить категорию: ${name}?`,
            onConfirn: () => deleteCategoryById(id),
        };

        dispatch(setOpenModal(modalWindow));
    };

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[20px] w-full">
                <TitleProfileWithBack>
                    {isEdit ? "Редактировать категорию" : "Добавить категорию"}
                </TitleProfileWithBack>
                <form
                    onSubmit={isEdit ? updateCategoryData : addNewCategory}
                    className="flex flex-col sm:flex-row sm:w-full mb-[10px] gap-[12px] gap-y-1"
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

                    {isEdit ? (
                        <>
                            <ButtonBlue type={"submit"}>сохранить</ButtonBlue>
                            <ButtonBlue onClick={onCancelUpdate}>отмена</ButtonBlue>
                        </>
                    ) : (
                        <ButtonBlue type={"submit"}>добавить</ButtonBlue>
                    )}
                </form>
                {serverError && <ErrorBlock>{serverError}</ErrorBlock>}

                <div className="mt-[20px]">
                    <Categories
                        edit={true}
                        categories={categories}
                        deleteCategory={onDeleteCategory}
                    />
                </div>
            </div>
        </>
    );
};
