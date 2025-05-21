const { GETFavorite, POSTFavorite, DELETEFavorite } = require("./favorite");
const { GETProfile, PUTProfile } = require("./profile");

module.exports = {
  GETProfile,
  PUTProfile,
  GETFavorite,
  POSTFavorite,
  DELETEFavorite,
};
