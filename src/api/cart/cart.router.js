const express = require("express");
const cartController = require("./cart.controller");

const cartRouter = express.Router();

// GET REQUEST
cartRouter.get("/", cartController.getCartItems);

module.exports = cartRouter;
