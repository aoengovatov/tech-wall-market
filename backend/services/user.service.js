const bcrypt = require("bcrypt");
const User = require("../models/User");
const Category = require("../models/Category");
const Product = require("../models/Product");
const Order = require("../models/Order");
const { generate } = require("../utils/token");
const ROLES = require("../constants/roles");
const OwnerProductList = require("../models/OwnerProductList");

exports.register = async (login, password) => {
    if (!password) {
        throw new Error("Password is empty");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({ login, password: passwordHash });
    const token = generate({ id: user.id });

    return { user, token };
};

exports.login = async (login, password) => {
    const user = await User.findOne({ login });

    if (!user) {
        throw new Error("Пользователь не найден");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
        throw new Error("Неверный пароль");
    }

    const token = generate({ id: user.id });

    return { token, user };
};

exports.getUsers = () => {
    return User.find();
};

exports.getRoles = () => {
    return [
        { id: ROLES.ADMIN, name: "Администратор" },
        { id: ROLES.MODERATOR, name: "Модератор" },
        { id: ROLES.USER, name: "Покупатель" },
    ];
};

exports.getCountUsersCategoriesProductsOrders = async () => {
    const [users, categories, products, orders] = await Promise.all([
        User.countDocuments(),
        Category.countDocuments(),
        Product.countDocuments(),
        Order.countDocuments(),
    ]);

    return { users, categories, products, orders };
};

exports.getCountFavoritesBasketMyOrders = async (ownerId) => {
    const [myOrders, ownerProducts] = await Promise.all([
        Order.find({ owner: ownerId }).countDocuments(),
        OwnerProductList.findOne({ owner: ownerId }),
    ]);

    let basket = 0;
    let favorites = 0;

    ownerProducts.products.map((product) => {
        if (product.status === "BASKET") {
            basket += 1;
        } else {
            favorites += 1;
        }
    });

    return { basket, favorites, myOrders };
};

exports.deleteUser = (id) => {
    return User.deleteOne({ _id: id });
};

exports.updateUser = (id, userData) => {
    return User.findByIdAndUpdate(id, userData, { returnDocument: "after" });
};
