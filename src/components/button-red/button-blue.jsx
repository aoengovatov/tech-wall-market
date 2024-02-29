export const ButtonRed = ({ children }) => {
    return (
        <button className="text-white bg-red w-full h-[50px] rounded-xl transition-all duration-200 hover:scale-105">
            {children}
        </button>
    );
};
