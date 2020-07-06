const express = require("express");
const mongoose = require("mongoose");
const debug = require("debug");
const UserRoute = require("./routes/user");

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

app.use("/", UserRoute);

app.get("/", (req, res) => {
  res.send("Server is responding");
});

app.listen(PORT, () => {
  console.log(`Shop Anywhere server is running on ${PORT}`);
});
