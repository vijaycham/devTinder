require("dotenv").config();


const mongoose = require("mongoose");
const DB_CLUSTER = process.env.DB_CLUSTER;


const connectDB = async () => {
  try {
    await mongoose.connect(DB_CLUSTER, {
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Stop the app immediately if DB connection fails
  }
}
module.exports = connectDB;
