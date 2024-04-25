import { forwardRef } from "react";

export const Input = forwardRef(({ type, placeholder, required, ...props }, ref) => {
    return (
        <input
            className="outline-none text-darkGray min-h-[35px] min-w-[55px] px-[10px] py-[5px] border-2 border-transparent bg-lightGray rounded-lg focus:border-blue"
            type={type}
            placeholder={placeholder}
            required={required === true ? "required" : ""}
            {...props}
            ref={ref}
        ></input>
    );
});
