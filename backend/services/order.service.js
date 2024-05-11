const Order = require("../models/Order");
const ORDER_STATUS = require("../constants/order-status.js");
const mapOrder = require("../mappers/mapOrder.js");

exports.getOrdersByUser = async (userId) => {
    const orders = await Order.find({ owner: userId }).sort({ createdAt: -1 });

    return orders;
};

exports.getOrders = async () => {
    const orders = await Order.find().sort({ createdAt: -1 }).populate("owner");

    return orders.map(mapOrder);
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
