import { Link } from "react-router-dom";

export const CategoryItem = ({ url, children }) => {
    return (
        <Link to={url}>
            <div className="px-[15px] py-[10px] rounded-lg transition-all duration-200 hover:bg-gray hover:text-black">
                {children}
            </div>
        </Link>
    );
};
