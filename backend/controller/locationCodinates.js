const asyncHandler = require("express-async-handler");
const locationCodinates = require("../model/schemaLoactionCodinates");

const getlocationCodinates = asyncHandler(async (req, res) => {
  const locations = await locationCodinates.find();
  res.status(200).json(locations);
});

module.exports = { getlocationCodinates };
