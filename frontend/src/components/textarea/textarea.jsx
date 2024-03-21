export const Textarea = ({ placeholder, required }) => {
    return (
        <textarea
            className="outline-none text-darkGray px-[10px] py-[5px] mb-[5px] border-2 border-transparent bg-lightGray rounded-lg focus:border-blue"
            placeholder={placeholder}
            required={required === true ? "required" : ""}
        ></textarea>
    );
};
