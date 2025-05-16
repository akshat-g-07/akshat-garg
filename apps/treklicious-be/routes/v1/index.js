const express = require("express");
const router = express.Router();

const trekRoutes = require("./trek");
router.use("/trek", trekRoutes);

const authRoutes = require("./auth");
router.use("/auth", authRoutes);

module.exports = router;
