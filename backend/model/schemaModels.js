const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  location: {
    type: String,
    required: [true, "Please add a location"],
  },
  desc: {
    type: String,
  },
});

// This schema is the collection name
module.exports = mongoose.model("location", locationSchema);
