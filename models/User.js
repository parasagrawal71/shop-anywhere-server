const mongoose = require("mongoose");

// Schema
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: String,
});

// Model
module.exports = mongoose.model("User", UserSchema, "users");
