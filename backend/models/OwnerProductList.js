const mongoose = require("mongoose");

const OwnerProductListSchema = mongoose.Schema(
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

const OwnerProductList = mongoose.model("OwnerProductList", FavoritSchema);

module.exports = OwnerProductList;
