import { ButtonBlue, Input } from "../../components";

export const Register = () => {
    return (
        <div className="flex items-center justify-center mb-[40px] w-full]">
            <div className="flex flex-col items-center justify-center w-[300px] mt-[50px]">
                <h1 className="mb-[10px]">Регистрация</h1>
                <div className="flex flex-col gap-[8px] mb-[15px] w-full border-2 border-lightGray rounded-lg p-5">
                    <Input type={"text"} placeholder={"логин..."} />
                    <Input type={"password"} placeholder={"пароль..."} />
                    <Input type={"password"} placeholder={"повторите пароль..."} />
                    <ButtonBlue>зарегистрироваться</ButtonBlue>
                </div>

                <div className="flex items-center justify-center text-white bg-red w-full p-3 rounded-xl">
                    Ошибка. Заполните поле логин.
                </div>
            </div>
        </div>
    );
};
