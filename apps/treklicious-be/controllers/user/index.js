const {
  GETFavorite,
  POSTFavorite,
  DELETEFavorite,
  CheckFavorite,
} = require("./favorite");
const { GETProfile, PUTProfile } = require("./profile");
const Recommended = require("./recommended");

module.exports = {
  GETProfile,
  PUTProfile,
  GETFavorite,
  POSTFavorite,
  DELETEFavorite,
  CheckFavorite,
  Recommended,
};
