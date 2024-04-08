const OwnerProductList = require("../models/OwnerProductList");

exports.getOwnerProducts = (userId) => {
    return OwnerProductList.find(userId);
};

exports.addOwnerProduct = async (owner, product, status, count) => {
    const isOwnerProductListExist = await Boolean(
        OwnerProductList.countDocuments({ owner })
    );
    let ownerProduct = {};

    if (isOwnerProductListExist) {
        ownerProduct = await OwnerProductList.findOneAndUpdate(
            { owner },
            { $push: { products: { product, count, status } } },
            { returnDocument: "after" }
        );
    } else {
        ownerProduct = await OwnerProductList.create({
            owner,
            products: [{ product, status, count }],
        });
    }

    return ownerProduct;
};

exports.deleteOwnerProduct = async (owner, product) => {
    await OwnerProductList.findOneAndUpdate(
        { owner },
        { $pull: { products: { product } } }
    );
};
