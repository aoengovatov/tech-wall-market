export const numberFormatter = (num) => {
    let result = num;

    if (typeof num === "number") {
        result = num.toLocaleString("ru-RU");
    }
    return result;
};
