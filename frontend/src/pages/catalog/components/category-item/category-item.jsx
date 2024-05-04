export const CategoryItem = ({ children, onSelectCategory, currentCategory }) => {
    const active = children === currentCategory;

    return (
        <div onClick={() => onSelectCategory(children)}>
            {active ? (
                <div className="px-[15px] py-[10px] rounded-lg cursor-pointer transition-all duration-200 bg-blue text-white">
                    {children}
                </div>
            ) : (
                <div className="px-[15px] py-[10px] rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray hover:text-black">
                    {children}
                </div>
            )}
        </div>
    );
};
