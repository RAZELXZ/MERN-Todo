require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');

const authRoute = require("./Routes/auth");
const todoRoute = require("./Routes/todo")

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(cookieParser());

app.get("/api", (req, res) => {
    res.send("express server!");
});

app.use("/api/auth", authRoute);
app.use("/api/todos", todoRoute);

mongoose.connect(process.env.MONGO_URI).then(
    () => {
        console.log('connected to mongo db');
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    }
)

