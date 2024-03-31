const categoryService = require("../services/category.service");

exports.getCategories = async (req, res) => {
    const categoryList = await categoryService.getCategories();

    res.send({ data: categoryList });
};
