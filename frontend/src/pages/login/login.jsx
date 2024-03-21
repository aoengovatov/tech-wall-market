import { Link } from "react-router-dom";
import { ButtonBlue, Input } from "../../components";

export const Login = () => {
    return (
        <div className="flex items-center justify-center mb-[40px] w-full]">
            <div className="flex flex-col items-center justify-center w-[300px] mt-[50px]">
                <h1 className="mb-[10px]">Авторизация</h1>
                <div className="flex flex-col gap-[8px] w-full border-2 border-lightGray rounded-lg p-5">
                    <Input type={"text"} placeholder={"логин..."} />
                    <Input type={"password"} placeholder={"пароль..."} />
                    <ButtonBlue>вход</ButtonBlue>
                </div>
                <Link
                    to={"/register"}
                    className="text-center px-[15px] py-[5px] mb-[10px] text-blue rounded-lg hover:underline"
                >
                    регистрация
                </Link>

                <div className="flex items-center justify-center text-white bg-red w-full p-3 rounded-xl">
                    Ошибка. Заполните поле логин.
                </div>
            </div>
        </div>
    );
};
