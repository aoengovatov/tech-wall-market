export const CardPrice = ({ price, oldPrice, color }) => {
    !oldPrice ? (oldPrice = "") : oldPrice;
    let col = "";

    switch (color) {
        case "green":
            col = "green";
            break;
        default:
            col = "black";
    }

    const style = `text-xl font-semibold leading-5 text-${col}`;

    return (
        <div className="flex flex-col">
            <div className={style}>{price} ₽</div>
            <div className="text-l line-through leading-5 text-darkGray">
                {oldPrice} ₽
            </div>
        </div>
    );
};
