const express = require("express");

// IMPORT OF ROUTER TO ALL RESOURCES
const usersRouter = require("./resources/users/users.router");
const cartRouter = require("./resources/cart/cart.router");

const apiRouter = express.Router();

// ROUTER TO ALL RESOURCES
apiRouter.use("/users", usersRouter);
apiRouter.use("/cart", cartRouter);

module.exports = apiRouter;
