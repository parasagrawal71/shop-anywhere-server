// const mongoose = require("mongoose");
const UserModel = require("../models/User");

const getUsers = (req, res) => {
  console.log("getUsers called");
  console.log("MONGODB_URI", process.env.MONGODB_URI);

  // mongoose
  //   .connect(
  //     process.env.MONGODB_URI || "mongodb://localhost:27017/shop-anywhere",
  //     {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //     }
  //   )
  //   .then(() => {
  //     console.log("connected");

  //   })
  //   .catch((err) => {
  //     console.log(
  //       "Mongoose: Could not connect to the database. Exiting now...",
  //       err
  //     );
  //   });
  UserModel.find()
    .then((response) => {
      console.log("users", response);
      res.status(200).send({
        success: true,
        response,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { getUsers };
