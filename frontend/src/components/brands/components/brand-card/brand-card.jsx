export const BrandCard = ({ src }) => {
    return (
        <div className="flex w-[47%] h-[50px] items-center justify-center bg-lightGray mb-[10px] rounded-xl md:max-w-[255px] md:h-[85px]">
            <img src={src} className="h-[80%] md:h-[70%]"></img>
        </div>
    );
};
