const express = require("express");
const usersController = require("./users.controller");

const usersRouter = express.Router();

// GET REQUEST
usersRouter.get("/", usersController.getUsers);

module.exports = usersRouter;
