const express = require("express");
const {
  GETProfile,
  PUTProfile,
  GETFavorite,
  POSTFavorite,
  DELETEFavorite,
  Recommended,
} = require("../../controllers/user");
const router = express.Router();

router.route("/recommended").get(Recommended);

router.route("/profile").get(GETProfile).put(PUTProfile);

router.route("/favorites").get(GETFavorite).post(POSTFavorite);

router.delete("/favorites/:favorite", DELETEFavorite);

module.exports = router;
