const ErrorHandler = require("../middleware/errorMiddleware");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const register = catchAsyncErrors(async (req, res, next) => {});
