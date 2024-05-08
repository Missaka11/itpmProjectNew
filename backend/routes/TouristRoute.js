const express  = require("express");
const { registerTourist } = require("../controller/touristController");
const router = express.Router();

router.route("/").post(registerTourist);

module.exports = router