const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user.routes");
const userForAdminRoute = require("./routes/user-for-admin.routes");
const authentificated = require("./middlewares/authentificated");
const hasRole = require("./middlewares/hasRole");

const config = require("config");
const port = config.get("port");
const origin = config.get("origin");
const mongoUri = config.get("mongoUri");
const ROLES = require("./constants/roles");

const app = express();

app.use(
    cors({
        credentials: true,
        origin,
    })
);

app.use(cookieParser());
app.use(express.json());

app.use("/", userRoute);

app.use(authentificated);

app.use("/users", hasRole(ROLES.ADMIN), userForAdminRoute);

mongoose.connect(mongoUri).then(() => {
    app.listen(port, () => {
        console.log(`Server start on port ${port}`);
    });
});
