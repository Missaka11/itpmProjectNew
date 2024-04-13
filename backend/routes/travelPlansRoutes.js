const express = require("express");
const { getTravelPlans } = require("../controller/TravelPlansController");
const router = express.Router();

// Create the routes
// Enter other routes
router.route("/").get(getTravelPlans);

module.exports = router;
