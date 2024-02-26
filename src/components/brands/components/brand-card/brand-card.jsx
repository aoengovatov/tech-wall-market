export const BrandCard = ({ src }) => {
    return (
        <div className="flex w-[255px] h-[85px] items-center justify-center bg-lightGray mb-[10px] rounded-xl">
            <img src={src} className="h-[70%]"></img>
        </div>
    );
};
