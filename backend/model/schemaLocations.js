const mongoose = require("mongoose");

const Locations = mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  desc: [String],
  imagePath: {
    type: String,
    required: [true, "Please privide image URL"],
  },
});

// This schema is the collection name
module.exports = mongoose.model("locations", Locations);