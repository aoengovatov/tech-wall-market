const productService = require("../services/product.service");
const mapProduct = require("../mappers/mapProduct");

exports.getProduct = async (req, res) => {
    const product = await productService.getProduct(req.params.id);

    res.send({ error: null, product });
};

exports.getProducts = async (req, res) => {
    const { search, limit, page, category, priceSort } = req.query;

    const { products, lastPage } = await productService.getProducts(
        search,
        limit,
        page,
        category,
        priceSort
    );

    res.send({ lastPage, products });
};
