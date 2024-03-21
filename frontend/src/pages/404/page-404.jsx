import { useNavigate } from "react-router-dom";
import { ButtonBlue } from "../../components";

export const Page404 = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center mb-[40px] w-full]">
            <div className="flex flex-col items-center justify-center w-[350px] mt-[50px]">
                <div className="text-[85px] font-semibold leading-10 mb-[10px] text-blue">
                    404
                </div>
                <div className="flex flex-col items-center w-full p-5">
                    <div className="mb-[10px] text-center">
                        Кажется такой страницы еще нет, но мы уже работаем над ее
                        созданием.
                    </div>
                    <ButtonBlue onClick={() => navigate(-1)}>вернуться назад</ButtonBlue>
                </div>
            </div>
        </div>
    );
};
