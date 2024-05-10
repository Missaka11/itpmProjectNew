const express = require("express");
const { deleteUser } = require("../controller/userController");
const router = express.Router();


router.route("/").delete(deleteUser);

module.exports = router;
