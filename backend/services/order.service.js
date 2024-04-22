const Order = require("../models/Order");
const ORDER_STATUS = require("../constants/order-status.js");

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
        products,
        totalPrice,
    });

    return newOrder;
};

exports.updateStatus = async (id, data) => {
    const updateOrderStatus = await Order.findByIdAndUpdate(id, data, {
        returnDocument: "after",
    });

    return updateOrderStatus;
};

exports.getStatusForOrders = () => {
    return ORDER_STATUS;
};
