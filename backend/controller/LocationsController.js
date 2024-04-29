const asyncHandler = require("express-async-handler");
const Locations = require("../model/schemaLocations");
// @Desc Get location details
// @route GET /api/travelPlans
// @access Private
const getLocations = asyncHandler(async (req, res) => {
  const loc = await Locations.find();
  res.status(200).json(loc);
});

const getOneLocation = asyncHandler(async (req, res) => {
  const loc = await Locations.findById(req.params.id); // Fetch location by ID
  if (!loc) {
    return res.status(404).json({ message: "Location not found" });
  }
  res.status(200).json(loc);
});

module.exports = { getLocations, getOneLocation };