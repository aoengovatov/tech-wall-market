export const ButtonRed = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className="text-white bg-red w-full h-[50px] rounded-xl transition-all duration-200 hover:scale-105"
        >
            {children}
        </button>
    );
};
