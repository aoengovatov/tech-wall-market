import { Link } from "react-router-dom";

export const NavLinkFooter = ({ href, children }) => {
    return (
        <Link
            to={href}
            className="text-white mb-[7px] hover:text-white hover:underline decoration-1"
        >
            {children}
        </Link>
    );
};
