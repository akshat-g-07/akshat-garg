const express = require("express");
const router = express.Router();

const trekRoutes = require("./trek");
router.use("/trek", trekRoutes);

module.exports = router;
