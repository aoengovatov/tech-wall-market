export const ButtonLike = ({ ...props }) => {
    return (
        <button
            {...props}
            className="border-0 w-[40px] p-[8px] rounded-full transition-all duration-200 hover:bg-lightGray"
        >
            <img src="/src/assets/like-icon-sm.png" className=""></img>
        </button>
    );
};
