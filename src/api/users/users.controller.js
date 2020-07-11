const UserModel = require("./users.model");
const { successResponse, failureResponse } = require("../../utils/response.format");

const getUsers = (req, res) => {
  UserModel.find()
    .then((response) => {
      res.status(200).send(successResponse(true, 200, "", response, null));
    })
    .catch((e) => {
      res.status(e.status).send(failureResponse(false, e.status, e.message, e, null));
    });
};

module.exports = { getUsers };
