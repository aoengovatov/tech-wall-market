const express = require("express");
const orderRouter = express.Router({ mergeParams: true });
const orderForAdminController = require("../controllers/order-for-admin.controller");

orderRouter.get("/", orderForAdminController.getOrders);
orderRouter.get("/status", orderForAdminController.getStatusForOrders);
orderRouter.patch("/:id", orderForAdminController.updateStatus);

module.exports = orderRouter;
