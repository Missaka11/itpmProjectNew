const asyncHandler = require("express-async-handler");
const locationData = require("../model/schemaModels");

// Enter other methods POST, PUT, DELETE
// Update the error handling part in GET method

// @Desc    Get location details
// @route   GET /api/data
// @access  Private
const getData = asyncHandler(async (req, res) => {
  const locations = await locationData.find();
  res.status(200).json(locations);
});

// @Desc    Post location details
// @route   Post /api/data
// @access  Private
const setData = asyncHandler(async (req, res) => {
  if (!req.body.location) {
    res.status(400);
    throw new Error("Please add the location");
  }

  const locations = await locationData.create({
    location: req.body.location,
    desc: req.body.desc,
  });
  res.status(200).json(locations);
});

module.exports = {
  getData,
  setData,
};
