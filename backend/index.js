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
const mongoUri = config.get("mongoUri");
const ROLES = require("./constants/roles");

const app = express();

app.use(
    cors({
        credentials: true,
        origin: true,
    })
);

app.use(cookieParser());
app.use(express.json());

app.use("/", userRoute);
app.use("/categories", categoryRoute);
app.use("/products", productRoute);

app.use(authentificated);

app.use(
    "/users/products",
    hasRole([ROLES.USER, ROLES.ADMIN, ROLES.MODERATOR]),
    ownerProductRoute
);
app.use("/users", hasRole([ROLES.ADMIN, ROLES.MODERATOR]), userForAdminRoute);
app.use("/categories", hasRole([ROLES.ADMIN, ROLES.MODERATOR]), categoryForAdminRoute);
app.use("/products", hasRole([ROLES.ADMIN, ROLES.MODERATOR]), productForAdminRoute);
app.use("/orders", hasRole([ROLES.USER, ROLES.ADMIN, ROLES.MODERATOR]), orderRoute);
app.use("/orders", hasRole([ROLES.ADMIN, ROLES.MODERATOR]), orderForAdminRoute);

mongoose.connect(mongoUri).then(() => {
    app.listen(port, () => {
        console.log(`Server start on port ${port}`);
    });
});
