require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    console.log("🔍 MONGO_URI:", process.env.MONGO_URI); // Debugging: Check if MONGO_URI is loaded

    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in the .env file");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "MernStackLibraryManagement",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected...");
  } catch (error) {
    console.error("❌ Error connecting to database:", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
