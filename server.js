const express = require("express");
const mongoose = require("mongoose");

// Models
const UserModel = require("./models/User");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/shop-anywhere",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

app.get("/", (req, res) => {
  UserModel.find().then((response) => {
    res.send(response);
  });
});

app.listen(PORT, () => {
  console.log(`Shop Anywhere server is running on ${PORT}`);
});
