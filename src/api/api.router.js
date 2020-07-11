const express = require("express");

// IMPORT OF ROUTER TO ALL RESOURCES
const userRouter = require("./user/user.router");
const cartRouter = require("./cart/cart.router");
const authRouter = require("./auth/auth.router");

const apiRouter = express.Router();

// ROUTER TO ALL RESOURCES
apiRouter.use("/user", userRouter);
apiRouter.use("/cart", cartRouter);
apiRouter.use("/auth", authRouter);

module.exports = apiRouter;
