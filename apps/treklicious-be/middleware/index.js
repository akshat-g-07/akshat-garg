const express = require("express");
const router = express.Router();

const logRequest = require("./logRequest");
router.use(logRequest);

module.exports = router;
