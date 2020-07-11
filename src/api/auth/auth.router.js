const express = require("express");
const authController = require("./auth.controller");

const authRouter = express.Router();

authRouter.get("/signin", authController.Signin);

module.exports = authRouter;
