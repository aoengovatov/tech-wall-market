export const ButtonAdd = ({ src, ...props }) => {
    return (
        <button
            {...props}
            className="flex justify-center items-center w-[22px] h-[22px] rounded-full m-[2px] bg-midBlue text-white hover:scale-110"
        >
            <img src={src} className="w-[10px] h=[10px]"></img>
        </button>
    );
};
