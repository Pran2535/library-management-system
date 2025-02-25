const ErrorHandler = require("../middleware/errorMiddleware");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const register = catchAsyncErrors(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next(new ErrorHandler("Please enter all fields", 400));
    }
    const isRegistered = await User.findOne({ email, accountVerified: true });
    if (isRegistered) {
      return next(new ErrorHandler("Email already registered", 400));
    }
  } catch (error) {}
});
