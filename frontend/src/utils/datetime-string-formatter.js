export const datetimeStringFormatter = (string) => {
    const datetimeArr = string.split("T");
    return `${datetimeArr[0]} ${datetimeArr[1].slice(0, 5)}`;
};
