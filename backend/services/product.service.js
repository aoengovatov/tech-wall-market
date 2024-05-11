const Product = require("../models/Product");

exports.getProduct = (id) => {
    return (product = Product.findOne({ _id: id }));
};

exports.getProducts = async (search = "", limit = 10, page = 1, category, priceSort) => {
    let products = [];
    let count = 0;
    const sort = priceSort === "true" ? 1 : -1;

    if (category) {
        [products, count] = await Promise.all([
            Product.find({
                name: { $regex: search, $options: "i" },
            })
                .populate("category")
                .where("category")
                .in([category])
                .limit(limit)
                .skip((page - 1) * limit)
                .sort({ price: sort }),

            Product.countDocuments({
                name: { $regex: search, $options: "i" },
            })
                .populate("category")
                .where("category")
                .in([category]),
        ]);
    } else {
        [products, count] = await Promise.all([
            Product.find({
                name: { $regex: search, $options: "i" },
            })
                .limit(limit)
                .skip((page - 1) * limit)
                .sort({ price: sort }),

            Product.countDocuments({
                name: { $regex: search, $options: "i" },
            }),
        ]);
    }

    return { products, lastPage: Math.ceil(count / limit) };
};

exports.getTopProducts = async () => {
    const topProducts = await Product.find({ popular: true }).limit(4);

    return topProducts;
};

exports.getProductsCountByCategoryId = async (categoryId) => {
    const productsCount = await Product.countDocuments({ category: categoryId });

    return productsCount;
};

exports.addProduct = async (newProduct) => {
    try {
        const product = await Product.create(newProduct);

        await product.populate("category");

        return product;
    } catch (e) {
        return e;
    }
};

exports.deleteProduct = (id) => {
    return Product.deleteOne({ _id: id });
};

exports.updateProduct = (id, productData) => {
    return Product.findByIdAndUpdate(id, productData, { returnDocument: "after" });
};
