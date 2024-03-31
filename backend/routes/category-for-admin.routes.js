const express = require("express");
const categoryRouter = express.Router({ mergeParams: true });
const categoryForAdminController = require("../controllers/caregory-for-admin.controller");

categoryRouter.post("/", categoryForAdminController.addCategory);
categoryRouter.patch("/:id", categoryForAdminController.updateCategory);
categoryRouter.delete("/:id", categoryForAdminController.deleteCategory);

module.exports = categoryRouter;
