const mongoose = require("mongoose");

const UserProductsSchema = mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        products: [
            {   
                count: {
                    type: number,
                    default: 1,
                },
                status: {
                    type: String,
                    required: true,
                },
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
        ],
    },
    { timestamps: true }
);

const UserProducts = mongoose.model("UserProducts", FavoritSchema);

module.exports = UserProducts;
