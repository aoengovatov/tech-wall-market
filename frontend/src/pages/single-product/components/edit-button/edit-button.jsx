import { Link } from "react-router-dom";

export const EditButton = ({ id }) => {
    return (
        <div className="flex justify-end mb-1">
            <Link to={`/profile/add-product/${id}/edit`}>
                <span className="text-blue text-[14px] hover:underline">
                    редактировать
                </span>
            </Link>
        </div>
    );
};
