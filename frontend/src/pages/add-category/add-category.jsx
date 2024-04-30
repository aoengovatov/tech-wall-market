import { useState } from "react";
import { Breadcrumbs, ButtonBlue, Input, Categories } from "../../components";
import { request } from "../../utils";

export const AddCategory = () => {
    const [editCategory, setEditCategory] = useState(false);
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
            setName("");
            setColor("");
            setImageUrl("");
        });
    };

    return (
        <>
            <Breadcrumbs />

            <div className="mb-[20px]">
                {editCategory ? (
                    <>
                        <h1 className="ml-[10px] mb-[10px]">Редактировать категорию</h1>
                        <div className="flex mb-[30px] gap-[12px]">
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

                            <ButtonBlue>сохранить</ButtonBlue>
                            <ButtonBlue onClick={() => setEditCategory(false)}>
                                отмена
                            </ButtonBlue>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="ml-[10px] mb-[10px]">Добавить категорию</h1>
                        <div className="flex mb-[30px] gap-[12px]">
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

                            <ButtonBlue onClick={addCategory}>добавить</ButtonBlue>
                        </div>
                    </>
                )}

                <Categories edit={true} />
            </div>
        </>
    );
};
