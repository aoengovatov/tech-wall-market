const mongoose = require("mongoose");
const orderStatus = require("../constants/order-status");

const OrderSchema = mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                },
                count: {
                    type: Number,
                    required: true,
                },
            },
        ],
        totalPrice: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            default: orderStatus.CREATED,
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
