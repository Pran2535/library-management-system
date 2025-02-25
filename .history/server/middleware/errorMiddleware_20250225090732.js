class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "internal server error";
  err.statusCode = err.statusCode || 500;
  if (err.code === 11000) {
    const statusCode = 400;
    const message = `Duplicate Field Value Entered`;
    err = new ErrorHandler(message, statusCode);
  }
  if (err.name === "JsonWebTokenError") {
    const statusCode = 400;
    const message = `Json web token is invalid. try again`;
    err = new ErrorHandler(message, statusCode);
  }
  if (err.name === "TokenExpiredError") {
    const statusCode = 400;
    const message = `Json web token is expired. try again`;
    err = new ErrorHandler(message, statusCode);
  }
};
