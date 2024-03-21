import { ButtonDelete, ButtonEdit } from "../../../../components";

export const CategoryCard = ({ src, color, edit, children }) => {
    return (
        <div
            className="flex w-[255px] h-[150px] items-center justify-end  mb-[10px] rounded-xl relative z-0"
            style={{ backgroundColor: color }}
        >
            {edit && (
                <>
                    <div className="absolute flex gap-[8px] bg-lightGray px-2 py-2 rounded-lg top-2 right-2 z-30">
                        <ButtonEdit />
                        <ButtonDelete />
                    </div>
                </>
            )}
            <h2 className="font-medium absolute bottom-3 left-7 z-20">{children}</h2>
            <img src={src} className="h-[75%] pr-[20px] z-10"></img>
        </div>
    );
};
