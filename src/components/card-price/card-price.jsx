export const CardPrice = ({ price, oldPrice, color }) => {
    !oldPrice ? (oldPrice = "") : (oldPrice += " ₽");
    let textColor = "";

    switch (color) {
        case "green":
            textColor = "#1DC441";
            break;
        default:
            textColor = "#2D2929";
    }

    return (
        <div className="flex flex-col">
            <div className="text-xl font-semibold leading-5" style={{ color: textColor }}>
                {price} ₽
            </div>
            <div className="text-l line-through leading-5 text-darkGray">{oldPrice}</div>
        </div>
    );
};
