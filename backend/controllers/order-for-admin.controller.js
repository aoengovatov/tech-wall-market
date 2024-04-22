const orderService = require("../services/order.service");

exports.getOrders = async (req, res) => {
    const orders = await orderService.getOrders();

    res.send({ data: orders });
};

exports.updateStatus = async (req, res) => {
    const orderId = req.params.id;
    const status = req.body.status;
    console.log(orderId, status);

    const updatedOrder = await orderService.updateStatus(orderId, { status });

    res.send({ data: updatedOrder });
};
