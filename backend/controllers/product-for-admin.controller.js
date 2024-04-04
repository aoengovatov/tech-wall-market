const productService = require("../services/product.service");
const mapProduct = require("../mappers/mapProduct");

exports.addProduct = async (req, res) => {
    const {
        name,
        category,
        popular,
        price,
        oldPrice,
        imageUrl,
        count,
        description,
        characteristic,
    } = req.body;

    const newProduct = await productService.addProduct({
        name,
        category,
        popular,
        price,
        oldPrice,
        imageUrl,
        count,
        description,
        characteristic,
    });

    res.send({ data: mapProduct(newProduct) });
};

exports.deleteProduct = async (req, res) => {
    await productService.deleteProduct(req.params.id);

    res.send({ error: null });
};

exports.updateProduct = async (req, res) => {
    const {
        name,
        category,
        popular,
        price,
        oldPrice,
        imageUrl,
        count,
        description,
        characteristic,
    } = req.body;

    const updatedProduct = await productService.updateProduct(req.params.id, {
        name,
        category,
        popular,
        price,
        oldPrice,
        imageUrl,
        count,
        description,
        characteristic,
    });

    res.send({ data: mapProduct(updatedProduct) });
};
