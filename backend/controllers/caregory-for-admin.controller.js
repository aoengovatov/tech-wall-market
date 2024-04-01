const categoryService = require("../services/category.service");
const mapCategory = require("../mappers/mapCategory");

exports.addCategory = async (req, res) => {
    const { name, imageUrl, color } = req.body;

    const newCategory = await categoryService.addCategory(name, imageUrl, color);

    res.send({ data: mapCategory(newCategory) });
};

exports.deleteCategory = async (req, res) => {
    await categoryService.deleteCategory(req.params.id);

    res.send({ error: null });
};

exports.updateCategory = async (req, res) => {
    const { name, imageUrl, color } = req.body;

    const updatedCategory = await categoryService.updateCategory(req.params.id, {
        name,
        imageUrl,
        color,
    });

    res.send({ data: mapCategory(updatedCategory) });
};
