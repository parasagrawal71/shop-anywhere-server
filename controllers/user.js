const UserModel = require("../models/User");

const getUsers = (req, res) => {
  console.log("getUsers called");
  UserModel.findOne({ name: "Paras" })
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
