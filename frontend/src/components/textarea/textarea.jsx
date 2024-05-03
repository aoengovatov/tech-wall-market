import { forwardRef } from "react";

export const Textarea = forwardRef(({ placeholder, required, ...props }, ref) => {
    return (
        <textarea
            {...props}
            className="outline-none min-h-[100px] text-darkGray px-[10px] py-[5px] mb-[5px] border-2 border-transparent bg-lightGray rounded-lg focus:border-blue"
            placeholder={placeholder}
            required={required === true ? "required" : ""}
            ref={ref}
        ></textarea>
    );
});
