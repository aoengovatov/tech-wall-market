const mongoose = require("mongoose");

const FavoritSchema = mongoose.Schema(
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

const Favorit = mongoose.model("Basket", FavoritSchema);

module.exports = Favorit;