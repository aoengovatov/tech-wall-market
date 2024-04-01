const productService = require("../services/product.service");

exports.getProduct = async (req, res) => {
    const product = await productService.getProduct(req.param.id);

    res.send({ data: product });
};

exports.getProducts = async (req, res) => {
    const { search, limit, page, categoryId, priceSort } = req.query;

    const { products, lastPage } = await productService.getProducts(
        search,
        limit,
        page,
        categoryId,
        priceSort
    );

    res.send({ data: { products, lastPage } });
};
