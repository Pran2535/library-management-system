const express = require("express");
const { config } = require("dotenv");

const app = express();
config({ path: "/config/config.env" });
module.exports = app;
