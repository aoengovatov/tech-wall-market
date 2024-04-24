import { Link } from "react-router-dom";

export const IconNavMenu = ({ url, imageSrc }) => {
    return (
        <Link
            to={url}
            className="flex items-center justify-center w-[30px] h-[30px] bg-lightGray rounded-full ml-[5px] transition-all duration-100 hover:scale-110"
        >
            <img src={imageSrc} className="w-[15px] h-[15px]"></img>
        </Link>
    );
};
