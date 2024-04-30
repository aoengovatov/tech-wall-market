export const ButtonSmall = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className="text-sm bg-lightGray text-gray px-[8px] py-[4px] rounded-md transition-all duration-150 hover:scale-105 hover:text-darkGray"
        >
            {children}
        </button>
    );
};
