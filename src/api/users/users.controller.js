const UserModel = require("./users.model");

const getUsers = (req, res) => {
  UserModel.find()
    .then((response) => {
      res.status(200).send({
        success: true,
        data: response,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { getUsers };
