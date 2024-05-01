export const ButtonDelete = ({ ...props }) => {
    return (
        <button {...props} className="hover:scale-110">
            <img src="/src/assets/x.png" className="w-[13px] h-[13px]" />
        </button>
    );
};
