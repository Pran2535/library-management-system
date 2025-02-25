const express = require("express");
const { config } = require("dotenv");
const cookieParser = require("cookie-parser");

const app = express();
config({ path: "/config/config.env" });
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
module.exports = app;
