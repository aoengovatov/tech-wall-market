const User = require("../models/User");

module.exports = function (roles) {
    return function (req, res, next) {
        if (!roles.includes(req.user.role)) {
            res.status(403).send({ error: "Access denied!" });

            return;
        }

        next();
    };
};
