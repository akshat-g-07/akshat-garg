const mongoose = require("mongoose");

const userPreferencesSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
    default: "NA",
  },
  season: {
    type: String,
    required: true,
    default: "NA",
  },
  difficulty: {
    type: String,
    required: true,
    default: "NA",
  },
});

module.exports = userPreferencesSchema;
