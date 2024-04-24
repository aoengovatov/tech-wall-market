import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link to="/" className="text-[28px] text-blue font-bold">
            Tech<span className="font-light text-black">Wall</span>
        </Link>
    );
};
