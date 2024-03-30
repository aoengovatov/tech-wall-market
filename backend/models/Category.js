const mongoose = require("mongoose");
const validator = require("validator");

const CategorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        imageUrl: {
            type: String,
            required: true,
            validate: {
                validator: validator.isURL,
                message: "Image should be a valid url",
            },
        },
        color: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
