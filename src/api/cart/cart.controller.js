const CartModel = require("./cart.model");
const {
  successResponse,
  failureResponse,
} = require("../../utils/response.format");

const getCartItems = (req, res) => {
  CartModel.find()
    .then((response) => {
      res.send(successResponse(true, 200, "", response, null));
    })
    .catch((e) => {
      res.send(failureResponse(false, e.status, "", e, null));
    });
};

module.exports = { getCartItems };
