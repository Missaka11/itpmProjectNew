// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const connectDBLocation = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNECTION);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDBLocation;
