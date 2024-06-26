import { useNavigate } from "react-router-dom";
import { ButtonBlue } from "../../components";
import lockIcon from "../../assets/lock.png";

export const AccessDenied = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center mb-[40px] w-full]">
            <div className="flex flex-col items-center justify-center w-[350px] mt-[50px]">
                <img className="w-[80px]" src={lockIcon} />
                <div className="flex flex-col items-center w-full p-5">
                    <div className="mb-[10px] text-center">
                        Доступ к странице ограничен. <br /> Пожалуйста, обратитесь к
                        администратору.
                    </div>
                    <ButtonBlue onClick={() => navigate("/")}>
                        вернуться на главную
                    </ButtonBlue>
                </div>
            </div>
        </div>
    );
};
