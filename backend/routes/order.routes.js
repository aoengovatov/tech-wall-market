const express = require("express");
const orderRouter = express.Router({ mergeParams: true });
const orderController = require("../controllers/order.controller");

orderRouter.get("/owner", orderController.getOrdersByUser);
orderRouter.post("/owner", orderController.createOrder);

module.exports = orderRouter;
