const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
  { collection: "userDetails" }
);

module.exports = mongoose.model("userDetailModel", userDetailSchema);
