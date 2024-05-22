import deleteIcon from "../../assets/x.png";

export const ButtonDelete = ({ ...props }) => {
    return (
        <button {...props} className="hover:scale-110">
            <img src={deleteIcon} className="w-[13px] h-[13px]" />
        </button>
    );
};
