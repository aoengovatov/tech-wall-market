import { Link } from "react-router-dom";
import { PathBlock } from "./components/path-block/path-block";

export const Breadcrumbs = () => {
    const path = window.location.pathname.slice(1).split("/");
    const pathMap = [];

    path.forEach((path, index) => {
        if (index === 0) {
            pathMap.push("/" + path);
        } else {
            if (
                pathMap[index - 1] !== "/catalog" &&
                pathMap[index - 1] !== "/profile/category"
            ) {
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
                <PathBlock key={pathLink} url={pathLink}>
                    {path[index]}
                </PathBlock>
            ))}
        </div>
    );
};
