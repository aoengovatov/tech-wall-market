const jwt = require("jsonwebtoken");
const config = require("config");
const sign = config.get("jwt_sign");

module.exports = {
    generate(data) {
        return jwt.sign(data, sign, { expiresIn: "1d" });
    },
    verify(token) {
        return jwt.verify(token, sign);
    },
};