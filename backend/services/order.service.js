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
    return [
        { id: 1, name: ORDER_STATUS.CREATED },
        { id: 2, name: ORDER_STATUS.SORT },
        { id: 3, name: ORDER_STATUS.TRANSIT },
        { id: 4, name: ORDER_STATUS.IN_POINT },
        { id: 5, name: ORDER_STATUS.RECIEVED },
    ];
};
