const mongoose = require("mongoose");
const { MONGODB_URI } = require("../config/db.config");

const connectDB = mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose: Successfully connected to the database");
  })
  .catch((e) => {
    console.log(
      "Mongoose: Could not connect to the database. Exiting now...",
      e
    );
    process.exit();
  });

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

module.exports = connectDB;
