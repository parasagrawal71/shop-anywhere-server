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

const createUser = async (req, res) => {
  const userObj = UserModel(req.body);
  userObj
    .save()
    .then((response) => {
      //   console.log("response", response);
      res.status(201).send(successResponse(true, 201, "User account created", response, req.body));
    })
    .catch((e) => {
      //   console.log("catch error", e);
      if (e.name === "MongoError") {
        res.status(400).send(failureResponse(false, 400, "Email Id already exists", "Bad Request", req.body));
        return;
      }
      res.status(e.status).send(failureResponse(false, e.status, e.message, e, req.body));
    });
};

module.exports = { getUsers, createUser };
