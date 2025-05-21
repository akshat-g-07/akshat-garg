const mongoose = require("mongoose");

const trekDetailSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    season: {
      type: String,
      required: true,
      index: true,
    },
    difficulty: {
      type: String,
      required: true,
      index: true,
    },
    state: {
      type: String,
      required: true,
      index: true,
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { collection: "trekDetails" }
);

trekDetailSchema.index({ season: 1, difficulty: 1 });
trekDetailSchema.index({ season: 1, state: 1 });
trekDetailSchema.index({ difficulty: 1, state: 1 });
trekDetailSchema.index({ season: 1, difficulty: 1, state: 1 });

module.exports = mongoose.model("trekDetailModel", trekDetailSchema);
