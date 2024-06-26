import { useDispatch } from "react-redux";
import { ButtonDelete, ButtonEdit } from "../../../../components";
import { Link, useNavigate } from "react-router-dom";
import { setOpenModal } from "../../../../store/modalSlice";
import { deleteCategory } from "../../../../store/categorySlice";
import { request } from "../../../../utils";
import { setCategoryId } from "../../../../store/catalogSlice";

export const CategoryCard = ({ id, src, color, edit, deleteCategory = null, children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    

    const onClickCategory = () => {
        dispatch(setCategoryId(id));
        return navigate("/catalog");
    };

    return (
        <div
            onClick={edit ? null : onClickCategory}
            className="flex w-[48%] h-[100px] items-center justify-end  mb-[10px] rounded-xl shadow-md relative z-0 cursor-pointer transition-all duration-150 hover:scale-105 sm:h-[130px] md:h-[150px] md:w-[30%] lg:w-[255px]"
            style={{ backgroundColor: color }}
        >
            {edit && (
                <>
                    <div className="absolute flex items-center gap-[8px] bg-lightGray px-2 py-2 rounded-lg top-2 right-2 z-30">
                        <Link className="flex h-fit" to={`/profile/category/${id}/edit`}>
                            <ButtonEdit />
                        </Link>
                        <ButtonDelete onClick={() => deleteCategory(id, children)} />
                    </div>
                </>
            )}
            <h2 className="font-medium text-[18px] absolute bottom-3 left-7 z-20 sm:text-[22px]">
                {children}
            </h2>
            <img src={src} className="h-[50%] pr-[20px] z-10 sm:h-[60%] lg:h-[70%]"></img>
        </div>
    );
};
