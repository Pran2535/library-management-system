const express = require("express");
const { config } = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDb = require("./database/db");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const authRouter = require("./routes/authRouter");

const app = express();
config({ path: "./config/config.env" });
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
module.exports = app;
app.use("/api/v1/auth", authRouter);

connectDb();
app.use(errorMiddleware);
