const mongoose = require("mongoose");

const BasketSchema = mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
        ],
    },
    { timestamps: true }
);

const Basket = mongoose.model("Basket", BasketSchema);

module.exports = Basket;
