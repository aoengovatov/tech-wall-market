const Product = require("../models/Product");

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
