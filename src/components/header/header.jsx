import { IconMenu } from "./components";

export const Header = () => {
    return (
        <div className="h-[60px] w-[100%] bg-gradient-to-b from-lightGray to-transparent">
            <div className="flex items-center w-[1100px] h-[60px] justify-between px-[20px] m-auto mb-[10px] ">
                <div className="text-[25px] text-blue font-bold">
                    Tech<span className="font-light text-textBlack">Wall</span>
                </div>
                <div className="flex">
                    <IconMenu src={"F"} />
                    <IconMenu src={"B"} />
                    <IconMenu src={"P"} />
                </div>
            </div>
        </div>
    );
};
