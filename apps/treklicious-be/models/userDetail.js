const mongoose = require("mongoose");

const userPreferencesSchema = require("./userPreferencesSchema");

const userDetailSchema = new mongoose.Schema(
  {
    userIDModel_id: {
      type: mongoose.Types.ObjectId,
      required: true,
      index: true,
      unique: true,
      immutable: true,
    },
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
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      immutable: true,
    },
    profile: {
      type: String,
      required: true,
    },
    favorites: {
      type: [String],
      default: [],
    },
    preferences: userPreferencesSchema,
  },
  { collection: "userDetails", timestamps: true }
);

module.exports = mongoose.model("userDetailModel", userDetailSchema);
