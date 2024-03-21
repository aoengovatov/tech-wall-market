export const Input = ({ type, placeholder, required }) => {
    return (
        <input
            className="outline-none text-darkGray min-h-[35px] min-w-[55px] px-[10px] py-[5px] border-2 border-transparent bg-lightGray rounded-lg focus:border-blue"
            type={type}
            placeholder={placeholder}
            required={required === true ? "required" : ""}
        ></input>
    );
};
