const mongoose = require("mongoose");

const TravelPlans = mongoose.Schema({
  budget: {
    type: String,
    required: [true, "Please add a location"],
  },
  locations: [String],
  heading: [String],
  imageUrl: {
    type: String,
    required: [true, "Please privide image URL"],
  },
});

// This schema is the collection name
module.exports = mongoose.model("travelplans", TravelPlans);
