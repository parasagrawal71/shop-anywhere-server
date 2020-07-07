const express = require("express");
const apiRouter = require("./api/api.router");
require("./db.connect");

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/v1", apiRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Shop Anywhere API Server");
});

app.listen(PORT, () => {
  console.log(`Shop Anywhere API Server is running on ${PORT}`);
});
