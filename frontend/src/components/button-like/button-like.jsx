export const ButtonLike = ({ favoriteFlag = false, ...props }) => {
    const style = favoriteFlag ? "grayscale-0" : "grayscale opacity-50";

    return (
        <button
            {...props}
            className={`${style} border-0 w-[40px] p-[8px] rounded-full transition-all duration-200 hover:bg-lightGray hover:opacity-100`}
        >
            <img src="/src/assets/favorites.png" className=""></img>
        </button>
    );
};
