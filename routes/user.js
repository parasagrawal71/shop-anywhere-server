const express = require("express");

const router = express.Router();

const userController = require("../controllers/user");

console.log("inside routes");
router.get("/", userController.getUsers);

module.exports = router;
