export const ButtonBlue = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className="border-2 border-blue bg-white text-blue px-[15px] py-[7px] max-w-fit rounded-xl transition-all duration-200 hover:text-white hover:bg-blue"
        >
            {children}
        </button>
    );
};
