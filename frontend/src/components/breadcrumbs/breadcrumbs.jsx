import { Link } from "react-router-dom";

export const Breadcrumbs = () => {
    const path = window.location.pathname.slice(1).split("/");
    const pathMap = [];

    path.forEach((path, index) => {
        if (index === 0) {
            pathMap.push("/" + path);
        } else {
            if (pathMap[index - 1] !== "/catalog") {
                pathMap.push(pathMap[index - 1] + "/" + path);
            }
        }
    });

    return (
        <div className="flex ml-[10px] font-xs text-darkGray">
            <Link to={"/"}>
                <span>home</span>
            </Link>
            {pathMap.map((pathLink, index) => (
                <>
                    <div className="mx-[5px]"> / </div>
                    <Link to={pathLink}>
                        <span>{path[index]}</span>
                    </Link>
                </>
            ))}
        </div>
    );
};
