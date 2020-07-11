const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./src/api/api.router");
require("./src/utils/db.connect");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/api/v1", apiRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Shop Anywhere API Server!");
});

app.listen(PORT, () => {
  console.log(`Shop Anywhere API Server is running on ${PORT}`);
});
