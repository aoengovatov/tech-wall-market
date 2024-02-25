export const Header = () => {
    return (
        <div className="flex items-center justify-between h-[60px] w-[100%] px-[20px] mb-[10px] bg-gradient-to-b from-lightGray to-transparent">
            <div className="text-[25px] text-blue font-bold">
                Tech<span className="font-light text-textBlack">Wall</span>
            </div>
            <div className="flex">
                <div className="flex items-center justify-center w-[30px] h-[30px] bg-midGray rounded-full mr-[5px]">
                    F
                </div>
                <div className="flex items-center justify-center w-[30px] h-[30px] bg-midGray rounded-full mr-[5px]">
                    B
                </div>
                <div className="flex items-center justify-center w-[30px] h-[30px] bg-midGray rounded-full">
                    P
                </div>
            </div>
        </div>
    );
};
