const mongoose = require("mongoose");

const userPreferencesSchema = new mongoose.Schema(
  {
    state: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
  },
  { collection: "userPreferences" }
);

module.exports = userPreferencesSchema
