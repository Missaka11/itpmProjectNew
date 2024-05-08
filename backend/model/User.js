// models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  email: String,
  mobile: String,
  password: String,
  status: { type: Number, default: 1 }
});

const User = mongoose.model("users", userSchema);

module.exports = User;
