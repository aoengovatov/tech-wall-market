export const ProductDescriptions = ({ description, characteristic }) => {
    return (
        <div className="flex w-full p-[20px]">
            <div className="flex flex-col items-start justify-start w-1/2 pr-[30px]">
                <div className="text-base font-semibold mb-2">Описание товара:</div>
                <div className="font-normal leading-6 whitespace-pre-line">
                    {description}
                </div>
            </div>

            <div className="flex flex-col items-start justify-start w-1/2 pr-[30px]">
                <div className="text-base font-semibold mb-1">Характеристики товара:</div>
                <div className="font-normal leading-7 whitespace-pre-line">
                    {characteristic}
                </div>
            </div>
        </div>
    );
};
