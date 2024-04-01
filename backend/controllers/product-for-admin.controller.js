const productService = require("../services/product.service");

exports.addProduct = async (req, res) => {
    const {
        name,
        categoryId,
        popular,
        price,
        oldPrice,
        imageUrl,
        count,
        description,
        characteristic,
    } = req.body;

    const newProduct = await productService.addProduct(
        name,
        categoryId,
        popular,
        price,
        oldPrice,
        imageUrl,
        count,
        description,
        characteristic
    );

    res.send({ data: newProduct });
};

exports.deleteProduct = async (req, res) => {
    await productService.deleteProduct(req.params.id);

    res.send({ error: null });
};

exports.updateProduct = async (req, res) => {
    const {
        name,
        categoryId,
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
        categoryId,
        popular,
        price,
        oldPrice,
        imageUrl,
        count,
        description,
        characteristic,
    });

    res.send({ data: updatedProduct });
};
