const express = require("express");
const router = express.Router();
const logger = require("../utils/logger");

router
  .get("/", async (req, res) => {
    res.status(200).send(await logger.listLogFiles());
  })
  .get("/:index", async (req, res) => {
    const { index } = req.params;
    res.status(200).send(await logger.getLogFileContent(index));
  })
  .get("/delete/:index", async (req, res) => {
    const { index } = req.params;
    res
      .setHeader("Content-Type", "text/html")
      .status(200)
      .send(await logger.deleteLogFile(index));
  });

module.exports = router;
