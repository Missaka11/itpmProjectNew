const express = require("express");
const { getLocations } = require("../controller/LocationsController");
const router = express.Router();

// Create the routes
// Enter other routes
router.route("/").get(getLocations);

module.exports = router;