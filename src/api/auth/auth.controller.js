const UserModel = require("../users/users.model");
const {
  successResponse,
  failureResponse,
} = require("../../utils/response.format");

const Signup = async (req, res) => {
  const userObj = UserModel(req.body);
  userObj
    .save()
    .then((response) => {
      //   console.log("response", response);
      res.send(
        successResponse(true, 200, "User account created", response, req.body)
      );
    })
    .catch((e) => {
      //   console.log("catch error", e);
      res.send(failureResponse(false, e.status, "", e, req.body));
    });
};

module.exports = { Signup };
