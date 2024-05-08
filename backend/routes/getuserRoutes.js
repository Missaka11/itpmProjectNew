const express = require("express");
const { getUserDetails } = require("../controller/userController");
const router = express.Router();

router.route("/:userId").get(getUserDetails);


module.exports = router;
