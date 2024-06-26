const categoryService = require("../services/category.service");
const mapCategory = require("../mappers/mapCategory");

exports.getCategories = async (req, res) => {
    const categoryList = await categoryService.getCategories();

    res.send({ error: null, categories: categoryList.map(mapCategory) });
};
