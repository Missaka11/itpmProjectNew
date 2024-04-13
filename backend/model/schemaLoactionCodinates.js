const mongoose = require("mongoose");
const Double = require("mongoose-double")(mongoose);

const locationCodinates = mongoose.Schema({
  name: String,
  latitude: Double,
  longitude: Double,
});

// This schema is the collection name
module.exports = mongoose.model("locationCodinates", locationCodinates);
