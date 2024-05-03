const productService = require("../services/product.service");
const mapProduct = require("../mappers/mapProduct");

exports.addProduct = async (req, res) => {
    const product = req.body;

    try {
        const newProduct = await productService.addProduct(product);
        res.send({ error: null, product: mapProduct(newProduct) });
    } catch (e) {
        let errorMessage = "";

        if (e.code === 11000) {
            errorMessage = "Такой продукт уже существует";
        } else {
            errorMessage = e.message;
        }
        res.send({ error: errorMessage || "Неизвестная ошибка" });
    }
};

exports.deleteProduct = async (req, res) => {
    await productService.deleteProduct(req.params.id);

    res.send({ error: null });
};

exports.updateProduct = async (req, res) => {
    const product = req.body;

    const updatedProduct = await productService.updateProduct(req.params.id, product);

    res.send({ error: null, product: mapProduct(updatedProduct) });
};
