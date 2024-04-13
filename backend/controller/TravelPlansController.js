const asyncHandler = require("express-async-handler");
const travelPlans = require("../model/schemaTravelPlans");
// @Desc Get location details
// @route GET /api/travelPlans
// @access Private
const getTravelPlans = asyncHandler(async (req, res) => {
  const TPlans = await travelPlans.find();
  res.status(200).json(TPlans);
});
module.exports = { getTravelPlans };
