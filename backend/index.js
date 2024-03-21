const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user.routes");

const config = require("config");
const port = config.get("port");
const origin = config.get("origin");
const mongoUri = config.get("mongoUri");

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

mongoose.connect(mongoUri).then(() => {
    app.listen(port, () => {
        console.log(`Server start on port ${port}`);
    });
});
