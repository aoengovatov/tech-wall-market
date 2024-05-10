export const oldPriceCount = (price, sale) => {
    return Math.floor(price / ((100 - sale) / 100));
};
