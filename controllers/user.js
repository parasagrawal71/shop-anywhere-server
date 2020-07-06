const UserModel = require("../models/User");

const getUsers = (req, res) => {
  console.log("getUsers called");
  UserModel.find()
    .then((response) => {
      console.log("users", response);
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { getUsers };
