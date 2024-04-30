import { useState } from "react";
import { Breadcrumbs, ButtonBlue, Input, Categories, ErrorBlock } from "../../components";
import { request } from "../../utils";

export const AddCategory = () => {
    const [editCategory, setEditCategory] = useState(true);
    const [serverError, setServerError] = useState("");
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [color, setColor] = useState("");

    const onChangeColor = ({ target }) => {
        setColor(target.value);
    };

    const onChangeName = ({ target }) => {
        setName(target.value);
    };

    const onChangeImageUrl = ({ target }) => {
        setImageUrl(target.value);
    };

    const addCategory = () => {
        request("/categories", "POST", { name, imageUrl, color }).then((data) => {
            if (data.error) {
                setServerError(`Ошибка: ${data.error}`);
            }

            console.log(data);
            setName("");
            setColor("");
            setImageUrl("");
        });
    };

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[20px]">
                <h1 className="ml-[10px] mb-[10px]">
                    {editCategory ? "Редактировать категорию" : "Добавить категорию"}
                </h1>
                <div className="flex mb-[10px] gap-[12px]">
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

                    {editCategory ? (
                        <>
                            <ButtonBlue>сохранить</ButtonBlue>
                            <ButtonBlue onClick={() => setEditCategory(false)}>
                                отмена
                            </ButtonBlue>
                        </>
                    ) : (
                        <ButtonBlue onClick={addCategory}>добавить</ButtonBlue>
                    )}
                </div>
                {serverError && <ErrorBlock>{serverError}</ErrorBlock>}

                <div className="mt-[20px]">
                    <Categories edit={true} />
                </div>
            </div>
        </>
    );
};
