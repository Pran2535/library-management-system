class Error {
  constructor(message, status) {
    this.message = message;
    this.status = status;
  }
}
throw new Error("this is an error");
