export const saleCount = (price, oldPrice) => {
    return Math.floor(100 - (price * 100) / oldPrice);
};
