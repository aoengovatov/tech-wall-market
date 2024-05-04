export const CategoryItem = ({ children, onSelectCategory }) => {
    return (
        <div onClick={() => onSelectCategory(children)}>
            <div className="px-[15px] py-[10px] rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray hover:text-black">
                {children}
            </div>
        </div>
    );
};
