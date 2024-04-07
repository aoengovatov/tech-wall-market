const ownerProductService = require("../services/owner-product-list.service");

exports.addOwnerProduct = async (req, res) => {
    const userId = req.user.id;
    const { productId, status, count } = req.body;

    const newOwnerProduct = await ownerProductService.addOwnerProduct(
        userId,
        productId,
        status,
        count
    );

    res.send({ data: newOwnerProduct });
};

exports.deleteOwnerProduct = async (req, res) => {
    const productId = req.params.id;
    const userId = req.user.id;
    await ownerProductService.deleteOwnerProduct(userId, productId);

    res.send({ error: null });
};

/*
exports.updateCategory = async (req, res) => {
    const { name, imageUrl, color } = req.body;

    const updatedCategory = await categoryService.updateCategory(req.params.id, {
        name,
        imageUrl,
        color,
    });

    res.send({ data: mapCategory(updatedCategory) });
};
*/
