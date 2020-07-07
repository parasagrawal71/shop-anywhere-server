const express = require("express");
const mongoose = require("mongoose");
// const debug = require("debug");
// const bodyParser = require("body-parser");
// const cors = require("cors");
const UserRoute = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 5000;
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// app.use(bodyParser.json());
// app.use(cors());

console.log("MONGODB_URI", process.env.MONGODB_URI);
console.log("PORT", process.env.PORT);

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/shop-anywhere",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Mongoose: Successfully connected to the database");
  })
  .catch((err) => {
    console.log(
      "Mongoose: Could not connect to the database. Exiting now...",
      err
    );
    process.exit();
  });

// mongoose.connection.on("connected", () => {
//   console.log("Mongoose is connected!!!!");
// });

app.use("/api/users", UserRoute);

app.get("/", (req, res) => {
  res.send("Server is responding");
});

app.listen(PORT, () => {
  console.log(`Shop Anywhere server is running on ${PORT}`);
});

// https://shop-anywhere-server.herokuapp.com/ | https://git.heroku.com/shop-anywhere-server.git
