module.exports = function (order) {
    return {
        id: order.id,
        owner: order.owner.login,
        products: order.products,
        createdAt: order.createdAt,
        status: order.status,
    };
};
