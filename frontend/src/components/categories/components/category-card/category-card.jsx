import { useDispatch } from "react-redux";
import { ButtonDelete, ButtonEdit } from "../../../../components";
import { Link } from "react-router-dom";
import { setOpenModal } from "../../../../store/modalSlice";
import { deleteCategory } from "../../../../store/categorySlice";
import { request } from "../../../../utils";

export const CategoryCard = ({ id, src, color, edit, children }) => {
    const dispatch = useDispatch();

    const deleteCategoryById = (id) => {
        request(`/categories/${id}`, "DELETE").then((data) => {
            if (data.error === null) {
                dispatch(deleteCategory(id));
            }
        });
    };

    const onDeleteCategory = () => {
        const modalWindow = {
            isOpen: true,
            text: `Вы точно хотите удалить категорию: ${children}?`,
            onConfirn: () => deleteCategoryById(id),
        };

        dispatch(setOpenModal(modalWindow));
    };

    return (
        <Link
            to={edit ? null : `/catalog?caterory=${children}`}
            className="flex w-[48%] h-[100px] items-center justify-end  mb-[10px] rounded-xl shadow-md relative z-0 transition-all duration-150 hover:scale-105 sm:h-[130px] md:h-[150px] md:w-[30%] lg:w-[255px]"
            style={{ backgroundColor: color }}
        >
            {edit && (
                <>
                    <div className="absolute flex items-center gap-[8px] bg-lightGray px-2 py-2 rounded-lg top-2 right-2 z-30">
                        <Link className="flex h-fit" to={`/profile/category/${id}/edit`}>
                            <ButtonEdit />
                        </Link>
                        <ButtonDelete onClick={() => onDeleteCategory()} />
                    </div>
                </>
            )}
            <h2 className="font-medium text-[18px] absolute bottom-3 left-7 z-20 sm:text-[22px]">{children}</h2>
            <img src={src} className="h-[50%] pr-[20px] z-10 sm:h-[60%] lg:h-[70%]"></img>
        </Link>
    );
};
