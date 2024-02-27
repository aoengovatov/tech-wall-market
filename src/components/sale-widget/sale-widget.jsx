export const SaleWidget = ({ count }) => {
    return (
        <div className="text-xs bg-red text-white px-[4px] py-[3px] rounded">
            -{count}%
        </div>
    );
};
