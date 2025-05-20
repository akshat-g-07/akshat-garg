const express = require("express");
const { Login } = require("../../controllers/auth");
const router = express.Router();

router.post("/login", Login);
// refesh route
router.get("/refresh", () => {});
// signup route
router.post("/signup", () => {});
// logout route
router.post("/logout", () => {});

module.exports = router;
