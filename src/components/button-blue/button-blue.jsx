export const ButtonBlue = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className="border-2 border-blue bg-white text-blue px-[17px] h-[38px] rounded-xl transition-all duration-200 hover:text-white hover:bg-blue"
        >
            {children}
        </button>
    );
};
