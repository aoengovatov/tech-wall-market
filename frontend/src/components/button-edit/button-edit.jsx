import editIcon from "../../assets/edit.png";

export const ButtonEdit = () => {
    return (
        <button className="hover:scale-110">
            <img src={editIcon} className="w-[13px] h-[13px]" />
        </button>
    );
};
