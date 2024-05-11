const orderService = require("../services/order.service");

exports.getOrders = async (req, res) => {
    const orders = await orderService.getOrders();

    res.send({ error: null, orders });
};

exports.updateStatus = async (req, res) => {
    const orderId = req.params.id;
    const status = req.body.status;

    const updatedOrder = await orderService.updateStatus(orderId, { status });

    res.send({ data: updatedOrder });
};

exports.getStatusForOrders = (req, res) => {
    res.send({ error: null, statusList: orderService.getStatusForOrders() });
};
