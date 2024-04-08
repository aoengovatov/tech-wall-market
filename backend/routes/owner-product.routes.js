const express = require("express");
const ownerProduct = express.Router({ mergeParams: true });
const ownerProductController = require("../controllers/owner-product-list.controller");

ownerProduct.get("/", ownerProductController.getOwnerProducts);
ownerProduct.post("/", ownerProductController.addOwnerProduct);
ownerProduct.delete("/:id", ownerProductController.deleteOwnerProduct);

module.exports = ownerProduct;
