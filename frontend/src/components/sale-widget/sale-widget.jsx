export const SaleWidget = ({ count }) => {
    return (
        count !== 0 && (
            <div className="text-xs font-light bg-red text-white px-[4px] py-[2px] rounded">
                -{count}%
            </div>
        )
    );
};
