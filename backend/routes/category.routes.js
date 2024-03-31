const express = require("express");
const categoryRouter = express.Router({ mergeParams: true });
const categoryController = require("../controllers/category.controller");

categoryRouter.get("/", categoryController.getCategories);

module.exports = categoryRouter;
