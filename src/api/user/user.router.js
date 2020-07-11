const express = require("express");
const userController = require("./user.controller");

const userRouter = express.Router();

// REQUESTS
userRouter.get("/", userController.getUsers);
userRouter.post("/signup", userController.createUser);

module.exports = userRouter;
