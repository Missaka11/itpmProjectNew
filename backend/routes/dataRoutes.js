const express = require("express");
const { getData, setData } = require("../controller/dataController");
const router = express.Router();

// Create the routes
// Enter other routes
router.route("/").get(getData).post(setData);

module.exports = router;
