const express = require("express");
const { deleteUser } = require("../controller/userController");
const router = express.Router();


router.route("/:userId").delete(deleteUser);

module.exports = router;
