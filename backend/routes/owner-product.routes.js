const express = require("express");
const ownerProduct = express.Router({ mergeParams: true });
const ownerProductController = require("../controllers/owner-product-list.controller");

ownerProduct.post("/", ownerProductController.addOwnerProduct);

module.exports = ownerProduct;
