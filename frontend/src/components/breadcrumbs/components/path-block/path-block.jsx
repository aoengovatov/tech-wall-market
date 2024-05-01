import { Link } from "react-router-dom";

export const PathBlock = ({ isLink, url, children }) => {
    return isLink ? (
        <>
            <div className="mx-[5px]"> / </div>
            <Link to={url}>
                <span>{children}</span>
            </Link>
        </>
    ) : (
        <>
            <div className="mx-[5px]"> / </div>
            <span className="text-blue">{children}</span>
        </>
    );
};
