const CartModel = require("./cart.model");

const getCartItems = (req, res) => {
  CartModel.find()
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

module.exports = { getCartItems };
