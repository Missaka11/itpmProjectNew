// models/Tourist.js
const mongoose = require("mongoose");

const touristSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  email: String,
  mobile: String,
  password: String,
  status: { type: Number, default: 2 }
});

const Tourist = mongoose.model("Tourists",touristSchema);

module.exports = Tourist;