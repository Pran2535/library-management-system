const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect("", {
      dbName: "Mern stack Library Management",
    })
    .then(() => {
      console.log("MongoDB Connected...");
    });
};
