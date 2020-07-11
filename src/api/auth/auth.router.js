const express = require("express");
const authController = require("./auth.controller");

const authRouter = express.Router();

authRouter.post("/signup", authController.Signup);

module.exports = authRouter;
