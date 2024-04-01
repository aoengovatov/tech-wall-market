module.exports = function (category) {
    return {
        id: category.id,
        name: category.name,
        imageUrl: category.imageUrl,
        color: category.color,
    };
};
