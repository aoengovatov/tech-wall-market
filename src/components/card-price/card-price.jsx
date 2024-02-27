export const CardPrice = ({ price, oldPrice }) => {
    !oldPrice ? (oldPrice = "") : oldPrice;

    return (
        <div className="flex flex-col">
            <div className="text-xl font-semibold leading-5">{price} ₽</div>
            <div className="text-l line-through leading-5 text-darkGray">
                {oldPrice} ₽
            </div>
        </div>
    );
};
