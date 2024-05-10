export const oldPriceCount = (price, sale) => {
    return Math.floor(price - ((price * sale) / 100));
};
