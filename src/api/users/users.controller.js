const UserModel = require("./users.model");
const {
  successResponse,
  failureResponse,
} = require("../../utils/response.format");

const getUsers = (req, res) => {
  UserModel.find()
    .then((response) => {
      res.send(successResponse(true, 200, "", response, null));
    })
    .catch((e) => {
      res.send(failureResponse(false, e.status, "", e, null));
    });
};

module.exports = { getUsers };
