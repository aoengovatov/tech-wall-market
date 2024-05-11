import { Link } from "react-router-dom";

export const EditButton = ({ link }) => {
    return (
        <div className="flex justify-end mb-1">
            <Link to={link}>
                <span className="text-blue text-[14px] hover:underline">
                    редактировать
                </span>
            </Link>
        </div>
    );
};
