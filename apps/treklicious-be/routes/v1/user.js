const express = require("express");
const router = express.Router();

// user route to get recommended treks
router.route("/recommended").get(() => {});

// user profile routes get request put request
router
  .route("/profile")
  .get(() => {})
  .put(() => {});

// user preferences routes get request put request
router
  .route("/preferences")
  .get(() => {})
  .put(() => {});

// user favorites routes get request post request to add delete req to remove
router
  .route("/favorites")
  .get(() => {})
  .post(() => {})
  .delete(() => {});

module.exports = router;
