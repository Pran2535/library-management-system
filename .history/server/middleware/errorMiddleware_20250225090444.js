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
    err.message = `Duplicate Field Value Entered`;
    err = new ErrorHandler(err.message, err.statusCode);
  }
};
