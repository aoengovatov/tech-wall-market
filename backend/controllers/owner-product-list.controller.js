const ownerProductService = require("../services/owner-product-list.service");
const userService = require("../services/user.service");

exports.getOwnerProducts = async (req, res) => {
    const userId = req.user.id;

    const ownerProducts = await ownerProductService.getOwnerProducts(userId);

    res.send({ error: null, data: ownerProducts });
};

exports.addOwnerProduct = async (req, res) => {
    const userId = req.user.id;
    const { productId, status, count } = req.body;
    const updateAll = Boolean(req.query.updateAll);

    let newOwnerProduct;

    if (updateAll) {
        newOwnerProduct = await ownerProductService.updateStatusAll(userId, status);
    } else {
        newOwnerProduct = await ownerProductService.addOwnerProduct(
            userId,
            productId,
            status,
            count
        );
    }

    res.send({ error: null, data: newOwnerProduct });
};

exports.updateStatus;

exports.deleteOwnerProduct = async (req, res) => {
    const productId = req.params.id;
    const userId = req.user.id;
    await ownerProductService.deleteOwnerProduct(userId, productId);

    res.send({ error: null });
};

exports.deleteAllBasketProducts = async (req, res) => {
    const userId = req.user.id;

    await ownerProductService.deleteAllBasketProducts(userId);

    res.send({ error: null });
};

exports.getCountFavoritesBasketMyOrders = async (req, res) => {
    const ownerId = req.user.id;

    const countAll = await userService.getCountFavoritesBasketMyOrders(ownerId);

    res.send({ error: null, count: countAll });
};
