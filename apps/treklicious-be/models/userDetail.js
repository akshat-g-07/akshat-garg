const mongoose = require("mongoose");

const userPreferencesSchema = require("./userPreferencesSchema");

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
    favorites: {
      type: [String],
    },
    preferences: userPreferencesSchema,
  },
  { timestamps: true },
  { collection: "userDetails" }
);

module.exports = mongoose.model("userDetailModel", userDetailSchema);
