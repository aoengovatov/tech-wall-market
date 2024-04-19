const mongoose = require("mongoose");
const orderStatus = require("../constants/order-status");
const validator = require("validator");

const OrderSchema = mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        products: [
            {
                productId: {
                    type: String,
                    required: true,
                },
                count: {
                    type: Number,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                imageUrl: {
                    type: String,
                    required: true,
                    validate: {
                        validator: validator.isURL,
                        message: "Image should be a valid url",
                    },
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
