const express = require("express");
const productRouter = express.Router({ mergeParams: true });
const productController = require("../controllers/product.controller");

productRouter.get("/", productController.getProducts);
productRouter.get("/:id", productController.getProduct);

module.exports = productRouter;