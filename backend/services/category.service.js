const Category = require("../models/Category");

exports.getCategories = () => {
    return Category.find();
};

exports.addCategory = async (name, imageUrl, color) => {
    const category = await Category.create({ name, imageUrl, color });

    return category;
};

exports.deleteCategory = (id) => {
    return Category.deleteOne({ _id: id });
};

exports.updateCategory = (id, userData) => {
    return Category.findByIdAndUpdate(id, userData, { returnDocument: "after" });
};