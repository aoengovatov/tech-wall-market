const Product = require("../models/Product");

exports.getProduct = (id) => {
    return Product.find(id).populate("category");
};

exports.getProducts = async (
    search = "",
    limit = 10,
    page = 1,
    categoryId,
    priceSort = false
) => {
    const [products, count] = await Promise.all([
        Product.find({ name: { $regex: search, $options: "i" }, categoryId })
            .limit(limit)
            .skip((page - 1) * limit)
            .sort({ price: priceSort ? 1 : -1 }),
        Product.countDocuments({ name: { $regex: search, $options: "i" }, categoryId }),
    ]);

    return { products, lastPage: Math.ceil(count / limit) };
};

exports.addProduct = async (
    name,
    categoryId,
    popular,
    price,
    oldPrice,
    imageUrl,
    count,
    description,
    characteristic
) => {
    const newProduct = {
        name,
        categoryId,
        popular,
        price,
        oldPrice,
        imageUrl,
        count,
        description,
        characteristic,
    };
    const product = await Product.create(newProduct);

    await product.populate("category");

    return product;
};

exports.deleteProduct = (id) => {
    return Product.deleteOne({ _id: id });
};

exports.updateProduct = (id, productData) => {
    return Product.findByIdAndUpdate(id, productData, { returnDocument: "after" });
};
