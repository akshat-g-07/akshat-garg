const express = require("express");
const router = express.Router();

const { TREK_ROUTE } = require("@repo/treklicious-constants");

const trekRoutes = require("./trek");
router.use(TREK_ROUTE, trekRoutes);

const authRoutes = require("./auth");
router.use("/auth", authRoutes);

const userRoutes = require("./user");
router.use("/user", userRoutes);

module.exports = router;
