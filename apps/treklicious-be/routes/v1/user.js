const express = require("express");
const { GETProfile, PUTProfile } = require("../../controllers/user");
const router = express.Router();

// user route to get recommended treks
router.route("/recommended").get(() => {});

router.route("/profile").get(GETProfile).put(PUTProfile);

// user favorites routes get request post request to add delete req to remove
router
  .route("/favorites")
  .get(() => {})
  .post(() => {})
  .delete(() => {});

module.exports = router;
