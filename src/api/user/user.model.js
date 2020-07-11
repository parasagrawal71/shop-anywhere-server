const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  phone: { type: Number, unique: true },
});

module.exports = mongoose.model("User", UserSchema, "users");
