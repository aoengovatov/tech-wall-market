import backIcon from "../../assets/back-arrow.png";

export const BackBtn = ({ ...props }) => {
    return (
        <button
            {...props}
            className="flex items-center justify-center w-[28px] h-[28px] ml-[5px] border-2 border-gray rounded-full hover:border-blue hover:scale-110"
        >
            <img className="w-[18px] " src={backIcon} />
        </button>
    );
};
