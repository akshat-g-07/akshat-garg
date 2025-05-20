const express = require("express");
const { Login, Refresh, Logout } = require("../../controllers/auth");
const router = express.Router();

router.post("/login", Login);
router.get("/refresh", Refresh);
// signup route
router.post("/signup", () => {});
// logout route
router.post("/logout", Logout);

module.exports = router;
