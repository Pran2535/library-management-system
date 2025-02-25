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
      return next(new ErrorHandler("User already registered", 400));
    }
    const registerationAttemptsByUser = await User.findOne({
      email,
      accountVerified: false,
    });
    if (registerationAttemptsByUser.length >= 5) {
      return next(
        new ErrorHandler(
          "Too many failed login attempts. Please contact support.",
          400
        )
      );
    }
    if (password.length < 8 || password.length > 16) {
      return next(
        new ErrorHandler("Password must be between 8 to 16 characters", 400)
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
  } catch (error) {}
});
