const mongoose = require("mongoose");
const { LOCAL_MONGODB } = require("../config/db.config");

const connectDatabase = () => {
  let databaseUrl = null;
  if (process.env.NODE_ENV === "production") {
    databaseUrl = process.env.MONGODB_URI;
  } else {
    databaseUrl = LOCAL_MONGODB;
  }

  return mongoose
    .connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((e) => {
      console.log("Could not connect to the database. Exiting now...", e);
      process.exit();
    });
};

connectDatabase();

mongoose.connection.on("connected", () => {
  console.log("Database is connected!!!!");
});
