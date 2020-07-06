const express = require("express");
const mongoose = require("mongoose");
const debug = require("debug");

// Models
const UserModel = require("./models/User");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/shop-anywhere",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected");
    debug("Mongoose: Successfully connected to the database");
  })
  .catch((err) => {
    debug("Mongoose: Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// mongoose.connection.on("connected", () => {
//   console.log("Mongoose is connected!!!!");
// });

app.get("/", async (req, res) => {
  await UserModel.find().then((response) => {
    console.log("response", response);
    res.send(response);
  });
});

app.listen(PORT, () => {
  console.log(`Shop Anywhere server is running on ${PORT}`);
});
