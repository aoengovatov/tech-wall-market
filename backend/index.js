const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user.routes");
const userForAdminRoute = require("./routes/user-for-admin.routes");
const ownerProductRoute = require("./routes/owner-product.routes");
const categoryRoute = require("./routes/category.routes");
const categoryForAdminRoute = require("./routes/category-for-admin.routes");
const productRoute = require("./routes/product.routes");
const productForAdminRoute = require("./routes/product-for-admin.routes");
const orderRoute = require("./routes/order.routes");
const orderForAdminRoute = require("./routes/order-for-admin.routes");
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
app.use("/categories", categoryRoute);
app.use("/products", productRoute);

app.use(authentificated);

app.use("/users/products", hasRole([ROLES.USER]), ownerProductRoute);
app.use("/users", hasRole([ROLES.ADMIN]), userForAdminRoute);
app.use("/categories", hasRole([ROLES.ADMIN]), categoryForAdminRoute);
app.use("/products", hasRole([ROLES.ADMIN]), productForAdminRoute);
app.use("/orders", hasRole([ROLES.USER, ROLES.ADMIN]), orderRoute);
app.use("/orders", hasRole([ROLES.ADMIN]), orderForAdminRoute);

mongoose.connect(mongoUri).then(() => {
    app.listen(port, () => {
        console.log(`Server start on port ${port}`);
    });
});
