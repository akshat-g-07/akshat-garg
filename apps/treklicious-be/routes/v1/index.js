const express = require("express");
const router = express.Router();

const {
  TREK_ROUTE,
  USER_ROUTE,
  AUTH_ROUTE,
} = require("@repo/treklicious-constants");

const trekRoutes = require("./trek");
router.use(TREK_ROUTE, trekRoutes);

const authRoutes = require("./auth");
router.use(AUTH_ROUTE, authRoutes);

const userRoutes = require("./user");
router.use(USER_ROUTE, userRoutes);

module.exports = router;
