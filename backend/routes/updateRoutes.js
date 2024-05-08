const express = require("express");
const { updateUserDetails} = require("../controller/userController");
const router = express.Router();


router.route("/:userId").put(updateUserDetails);


module.exports = router;
