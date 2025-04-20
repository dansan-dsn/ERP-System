const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    phone_number: { type: String, unique: true, required: true },
    age: { type: Number, required: true },
    password: String,
  },
  { timestamps: true }
);

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
