const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "MernStackLibraryManagement", // Database name
      useNewUrlParser: true, // Helps with connection string parsing
      useUnifiedTopology: true, // Enables the new MongoDB engine
    });
    console.log("✅ MongoDB Connected...");
  } catch (error) {
    console.error("❌ Error connecting to database:", error.message);
    process.exit(1); // Exit the app if the database connection fails
  }
};

module.exports = connectDb;
