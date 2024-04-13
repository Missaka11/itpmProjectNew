const express = require("express");
const { getlocationCodinates } = require("../controller/locationCodinates");
const router = express.Router();

router.route("/").get(getlocationCodinates);

module.exports = router;
