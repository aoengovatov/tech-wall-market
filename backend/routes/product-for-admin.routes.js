const express = require("express");
const productRouter = express.Router({ mergeParams: true });
const productForAdminController = require("../controllers/product-for-admin.controller");

productRouter.post("/", productForAdminController.addProduct);
productRouter.patch("/:id", productForAdminController.updateProduct);
productRouter.delete("/:id", productForAdminController.deleteProduct);

module.exports = productRouter;
