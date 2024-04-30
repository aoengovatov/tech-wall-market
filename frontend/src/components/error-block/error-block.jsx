export const ErrorBlock = ({children}) => {
    return (
        <div className="flex items-center justify-center text-white bg-red w-full p-3 rounded-xl">
            {children}
        </div>
    );
};
