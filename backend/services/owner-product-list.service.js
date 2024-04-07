const OwnerProductList = require("../models/OwnerProductList");

exports.getOwnerProducts = (userId) => {
    return OwnerProductList.find(userId);
};

exports.addOwnerProduct = async (owner, product, status, count) => {
    const ownerProduct = await OwnerProductList.findByIdAndUpdate(owner, {
        $push: { products: { id: product, status, count } },
    });

    return ownerProduct;
};

exports.deleteOwnerProduct = async (owner, product) => {
    await OwnerProductList.findByIdAndUpdate(owner, {
        $pull: { products: { id: product } },
    });
};
