const { GETFavorite, POSTFavorite, DELETEFavorite } = require("./favorite");
const { GETProfile, PUTProfile } = require("./profile");
const Recommended = require("./recommended");

module.exports = {
  GETProfile,
  PUTProfile,
  GETFavorite,
  POSTFavorite,
  DELETEFavorite,
  Recommended,
};
