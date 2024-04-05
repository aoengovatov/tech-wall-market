const UserProducts = require("../models/UserProducts");

exports.getUserProducts = (userId) => {
    return UserProducts.find(userId);
};

exports.addUserProduct = async (owner, product, status, count) => {
    const userProduct = await UserProducts.findByIdAndUpdate(owner, {
        $push: { products: { id: product, status, count } },
    });

    return userProduct;
};

exports.deleteUserProduct = async (owner, product) => {
    await Post.findByIdAndUpdate(owner, { $pull: { products: { id: product } } });
};
