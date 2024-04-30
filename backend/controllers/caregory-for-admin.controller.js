const categoryService = require("../services/category.service");
const mapCategory = require("../mappers/mapCategory");

exports.addCategory = async (req, res) => {
    const { name, imageUrl, color } = req.body;
    try {
        const newCategory = await categoryService.addCategory(name, imageUrl, color);

        res.send({ error: null, category: mapCategory(newCategory) });
    } catch (e) {
        let errorMessage = "";

        if (e.code === 11000) {
            errorMessage = "Такая категория уже существует";
        } else {
            errorMessage = e.message;
        }
        res.send({ error: errorMessage || "Неизвестная ошибка" });
    }
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

    res.send({ error: null, category: mapCategory(updatedCategory) });
};
