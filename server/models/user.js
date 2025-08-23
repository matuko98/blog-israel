const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },
  accessToken: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
  resetToken: {
    type: String,
  },
  resetTokenExpiresAt: {
    type: Date,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
