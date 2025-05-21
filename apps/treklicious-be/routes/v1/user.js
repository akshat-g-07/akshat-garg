const express = require("express");
const {
  GETProfile,
  PUTProfile,
  GETFavorite,
  POSTFavorite,
  DELETEFavorite,
} = require("../../controllers/user");
const router = express.Router();

// user route to get recommended treks
router.route("/recommended").get(() => {});

router.route("/profile").get(GETProfile).put(PUTProfile);

router.route("/favorites").get(GETFavorite).post(POSTFavorite);

router.delete("/favorites/:favorite", DELETEFavorite);

module.exports = router;
