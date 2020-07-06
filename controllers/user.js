const UserModel = require("../models/User");

const getUsers = (req, res) => {
  UserModel.find()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { getUsers };
