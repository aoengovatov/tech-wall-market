import { ButtonBlue, Input } from "../../components";
import { useForm } from "react-hook-form";
import { yup } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const regFormSchema = yup.object().shape({
    login: yup
        .string()
        .required("Заполните логин.")
        .matches(/\w+$/, "Неверно заполнен логин. Допускаются буквы и цифры.")
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
    passcheck: yup
        .string()
        .required("Заполните повтор пароля")
        .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
});

export const Registration = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: "",
            passeord: "",
            passcheck: "",
        },
        resolver: yupResolver(regFormSchema),
    });

    const formError =
        errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;

    const onSubmit = ({ login, password, passcheck }) => {
        console.log(login, password, passcheck);
    };

    return (
        <div className="flex items-center justify-center mb-[40px] w-full]">
            <div className="flex flex-col items-center justify-center w-[300px] mt-[50px]">
                <h1 className="mb-[10px]">Регистрация</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-[8px] mb-[15px] w-full border-2 border-lightGray rounded-lg p-5"
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
                    <Input
                        type={"passcheck"}
                        placeholder={"повторите пароль..."}
                        {...register("passcheck")}
                    />
                    <ButtonBlue>зарегистрироваться</ButtonBlue>
                </form>

                {formError && (
                    <div className="flex items-center justify-center text-white bg-red w-full p-3 rounded-xl">
                        {formError}
                    </div>
                )}
            </div>
        </div>
    );
};
