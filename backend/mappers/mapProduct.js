module.exports = function (product) {
    return {
        id: product._id,
        name: product.name,
        category: {
            id: product.category._id,
            name: product.category.name,
        },
        price: product.price,
        oldPrice: product.oldPrice,
        popular: product.popular,
        imageUrl: product.imageUrl,
        count: product.count,
        description: product.description,
        characteristic: product.characteristic,
        createdAt: product.createdAt,
    };
};
