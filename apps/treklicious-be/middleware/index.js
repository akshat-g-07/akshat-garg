const express = require("express");
const router = express.Router();

const logRequest = require("./log-request");
router.use(logRequest);

const rateLimiter = require("./rate-limiter");
router.use(rateLimiter);

module.exports = router;
