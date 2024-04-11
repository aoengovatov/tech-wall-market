const OwnerProductList = require("../models/OwnerProductList");

exports.getOwnerProducts = (ownerId) => {
    return OwnerProductList.find({ owner: ownerId });
};

exports.addOwnerProduct = async (owner, product, status, count) => {
    const isOwnerProductListExist = await Boolean(
        OwnerProductList.countDocuments({ owner })
    );

    let newOwnerProduct = {};

    if (isOwnerProductListExist) {
        const oldProduct = await OwnerProductList.findOne({
            owner,
            "products.product": product,
        });

        if (oldProduct) {
            newOwnerProduct = await OwnerProductList.findOneAndUpdate(
                { owner, "products.product": product },
                { $set: { "products.$.count": count, "products.$.status": status } },
                { returnDocument: "after" }
            );
        } else {
            newOwnerProduct = await OwnerProductList.findOneAndUpdate(
                { owner },
                { $push: { products: { product, count, status } } },
                { returnDocument: "after" }
            );
        }
    } else {
        newOwnerProduct = await OwnerProductList.create({
            owner,
            products: [{ product, status, count }],
        });
    }

    return newOwnerProduct;
};

exports.updateStatusAll = async (owner, status) => {
    const updatedOwnerProductsStatus = await OwnerProductList.findOneAndUpdate(
        { owner },
        { $set: { "products.$[].status": status } },
        { returnDocument: "after" }
    );

    return updatedOwnerProductsStatus;
};

exports.deleteOwnerProduct = async (owner, product) => {
    await OwnerProductList.findOneAndUpdate(
        { owner },
        { $pull: { products: { product } } }
    );
};
