export const getShortName = (name) => {
    if (name.length > 30) {
        return name.substr(0, 20) + "...";
    }
    return name;
};