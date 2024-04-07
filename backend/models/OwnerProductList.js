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
                    type: Number,
                    default: 1,
                },
                status: {
                    type: String,
                    required: true,
                },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                },
            },
        ],
    },
    { timestamps: true },
    { _id: false }
);

const OwnerProductList = mongoose.model("OwnerProductList", OwnerProductListSchema);

module.exports = OwnerProductList;
