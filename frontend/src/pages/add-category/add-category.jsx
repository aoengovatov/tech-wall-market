import { useState } from "react";
import { Breadcrumbs, ButtonBlue, Input, Categories } from "../../components";

export const AddCategory = () => {
    const [editCategory, setEditCategory] = useState(true);

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
                                required={true}
                            />
                            <Input type={"text"} placeholder={"url логотипа..."} />
                            <Input type={"color"} placeholder={"цвет плашки"} />

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
                                required={true}
                            />
                            <Input type={"text"} placeholder={"url логотипа..."} />
                            <Input type={"color"} placeholder={"цвет плашки"} />

                            <ButtonBlue>добавить</ButtonBlue>
                        </div>
                    </>
                )}

                <Categories edit={true} />
            </div>
        </>
    );
};
