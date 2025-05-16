const express = require("express");
const router = express.Router();

const trekRoutes = require("./trek");
router.use("/trek", trekRoutes);

const authRoutes = require("./auth");
router.use("/auth", authRoutes);

const userRoutes = require("./user");
router.use("/user", userRoutes);

module.exports = router;
