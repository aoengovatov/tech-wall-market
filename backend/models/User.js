const mongoose = require("mongoose");
const roles = require("../constants/roles");

const UserSchema = mongoose.Schema(
    {
        login: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        role: {
            type: Number,
            default: roles.USER,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
