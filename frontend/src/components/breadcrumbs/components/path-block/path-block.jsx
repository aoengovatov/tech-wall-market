import { Link } from "react-router-dom";

export const PathBlock = ({ url, children }) => {
    return (
        <>
            <div className="mx-[5px]"> / </div>
            <Link to={url}>
                <span>{children}</span>
            </Link>
        </>
    );
};
