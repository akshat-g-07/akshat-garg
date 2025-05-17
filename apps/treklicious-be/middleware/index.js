const express = require("express");
const router = express.Router();

const logRequest = require("./log-request");
router.use(logRequest);

const rateLimiter = require("./rate-limiter");
router.use(rateLimiter);

const verifyJWT = require("./verify-jwt");
router.use(verifyJWT);

module.exports = router;
