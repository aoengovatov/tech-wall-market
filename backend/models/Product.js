const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
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
