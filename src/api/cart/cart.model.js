const mongoose = require("mongoose");

const { Schema } = mongoose;

const CartSchema = new Schema({
  title: String,
  brand: String,
});

module.exports = mongoose.model("Cart", CartSchema, "cart");
