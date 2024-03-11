import { Breadcrumbs, ButtonBlue, Input, Categories } from "../../components";

export const AddCategory = () => {
    return (
        <>
            <Breadcrumbs />
            <div className="mb-[20px]">
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
                <Categories edit={true}/>
            </div>
        </>
    );
};
