const Order = require("../models/Order");

exports.getOrdersByUser = async (userId) => {
    const orders = await Order.find({ owner: userId });

    return orders;
};

exports.getOrders = async () => {
    const orders = await Order.find();

    return orders;
};

exports.createOrder = async (userId, products, totalPrice) => {
    const newOrder = await Order.create({
        owner: userId,
        $push: { products: [...products] },
        totalPrice,
    });

    return newOrder;
};

exports.updateStatus = async (id, status) => {
    const updateOrderStatus = await Order.findByIdAndUpdate(
        id,
        { status },
        { returnDocument: "after" }
    );
};
