import { BackBtn } from "../back-btn/back-btn";
import { useNavigate } from "react-router-dom";

export const TitleProfileWithBack = ({ children }) => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center mb-[10px]">
            <BackBtn onClick={() => navigate(-1)} />
            <h1 className="ml-[10px] w-fit leading-10">{children}</h1>
        </div>
    );
};
