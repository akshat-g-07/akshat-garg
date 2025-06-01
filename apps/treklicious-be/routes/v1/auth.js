const express = require("express");
const { Login, Refresh, Logout, Signup } = require("../../controllers/auth");
const router = express.Router();

router.post("/login", Login);
router.get("/refresh", Refresh);
router.post("/signup", Signup);
router.get("/logout", Logout);

module.exports = router;
