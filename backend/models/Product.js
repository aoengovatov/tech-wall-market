const mongoose = require("mongoose");
const validator = require("validator");

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        },
        price: {
            type: String,
            required: true,
        },
        oldPrice: {
            type: String,
        },
        imageUrl: {
            type: String,
            required: true,
            validate: {
                validator: validator.isURL,
                message: "Image should be a valid url",
            },
        },
        count: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        characteristic: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
