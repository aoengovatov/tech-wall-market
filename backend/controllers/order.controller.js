const orderService = require("../services/order.service");

exports.getOrdersByUser = async (req, res) => {
    const userId = req.user.id;

    const orders = await orderService.getOrdersByUser(userId);

    res.send({ data: orders });
};

exports.createOrder = async (req, res) => {
    const userId = req.user.id;
    const { totalPrice, products } = req.body;

    const newOrder = await orderService.createOrder(userId, products, totalPrice);

    res.send({ data: newOrder });
};
