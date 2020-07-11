const mongoose = require("mongoose");
const { MONGODB_URI } = require("../config/db.config");

const connectDatabase = mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((e) => {
    console.log("Could not connect to the database. Exiting now...", e);
    process.exit();
  });

mongoose.connection.on("connected", () => {
  console.log("Database is connected!!!!");
});

module.exports = connectDatabase;
