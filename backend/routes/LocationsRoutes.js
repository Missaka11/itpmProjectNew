const express = require("express");
const { getLocations, getOneLocation } = require("../controller/LocationsController");
const router = express.Router();

// Create the routes
// Enter other routes
router.route("/").get(getLocations);

// Route to fetch a single location by ID
router.route("/:id").get(getOneLocation);

module.exports = router;