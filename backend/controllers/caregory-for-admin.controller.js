const categoryService = require("../services/category.service");
const productService = require("../services/product.service");
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
    const productCountInCategory = await productService.getProductsCountByCategoryId(
        req.params.id
    );

    console.log(productCountInCategory);

    if (productCountInCategory > 0) {
        res.send({
            error: `Ошибка удаления. Найдены связанные записи Products: ${productCountInCategory}`,
        });
        return;
    }

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
