const express = require("express");
const { Login, Refresh } = require("../../controllers/auth");
const router = express.Router();

router.post("/login", Login);
router.get("/refresh", Refresh);
// signup route
router.post("/signup", () => {});
// logout route
router.post("/logout", () => {});

module.exports = router;
