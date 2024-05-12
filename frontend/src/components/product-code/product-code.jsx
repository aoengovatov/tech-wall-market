export const ProductCode = ({ children }) => {
    return (
        <div className="text-xs text-gray w-min min-[450px]:w-fit">
            код&nbsp;товара: {children}
        </div>
    );
};
