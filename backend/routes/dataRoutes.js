const express = require("express");
const { getData, setData } = require("../controller/dataController");
const { registerUser } = require("../controller/userController");
const router = express.Router();

// Create the routes
// Enter other routes
router.route("/").get(getData).post(setData);
router.route("/").post(registerUser);

module.exports = router;
