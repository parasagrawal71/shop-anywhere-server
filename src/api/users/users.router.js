const express = require("express");
const usersController = require("./users.controller");

const usersRouter = express.Router();

// REQUESTS
usersRouter.get("/", usersController.getUsers);
usersRouter.post("/signup", usersController.createUser);

module.exports = usersRouter;
