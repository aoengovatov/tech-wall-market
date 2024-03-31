const categoryService = require("../services/category.service");

exports.register = async (req, res) => {
    try {
        const categoryList = await categoryService.getCategories();

        res.send({
            error: null,
            categories: categoryList,
        });
    } catch (e) {
        res.send({ error: e.message || "Unknown error" });
    }
};
