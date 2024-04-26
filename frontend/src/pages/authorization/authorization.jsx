import { Link } from "react-router-dom";
import { ButtonBlue, Input } from "../../components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { request } from "../../utils";
import { useState } from "react";

const authFormShema = yup.object().shape({
    login: yup
        .string()
        .required("Заполните логин")
        .matches(/\w+$/, "ННеверно заполнен логин. Допускаются буквы и цифры.")
        .min(3, "Неверно заполнен логин. Минимум 3 символа.")
        .max(15, "Неверно заполнен логин. Максимум 15 символов."),
    password: yup
        .string()
        .required("Заполните пароль")
        .matches(
            /^[\w#%]+$/,
            "Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %"
        )
        .min(6, "Неверно заполнен пароль. Минимум 6 символа.")
        .max(30, "Неверно заполнен пароль. Максимум 30 символов."),
});

export const Authorization = () => {
    const [serverError, setServerError] = useState(null);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: "",
            passeord: "",
        },
        resolver: yupResolver(authFormShema),
    });

    const onSubmit = ({ login, password }) => {
        request("/login", "POST", { login, password }).then(({ error, user }) => {
            if (error) {
                setServerError(`Ошибка запроса: ${error}`);
                return;
            }
            //dispatch(setUser(user));
            console.log(user);
            sessionStorage.setItem("userData", JSON.stringify(user));
        });
    };

    const formError = errors?.login?.message || errors?.password?.message;

    const errorMessage = formError || serverError;

    return (
        <div className="flex items-center justify-center mb-[40px] w-full]">
            <div className="flex flex-col items-center justify-center w-[300px] mt-[50px]">
                <h1 className="mb-[10px]">Авторизация</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-[8px] w-full border-2 border-lightGray rounded-lg p-5"
                >
                    <Input
                        type={"text"}
                        placeholder={"логин..."}
                        {...register("login")}
                    />
                    <Input
                        type={"password"}
                        placeholder={"пароль..."}
                        {...register("password")}
                    />
                    <ButtonBlue type="submit" disabled={errorMessage ? true : false}>
                        вход
                    </ButtonBlue>
                </form>

                <Link
                    to={"/register"}
                    className="text-center px-[15px] py-[5px] mb-[10px] text-blue rounded-lg hover:underline"
                >
                    регистрация
                </Link>

                {errorMessage && (
                    <div className="flex items-center justify-center text-white bg-red w-full p-3 rounded-xl">
                        {errorMessage}
                    </div>
                )}
            </div>
        </div>
    );
};
