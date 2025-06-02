const express = require("express");
const router = express.Router();
const logger = require("../utils/logger");

router
  .get("/", async (req, res) => {
    res.status(200).send(await logger.listLogFiles());
  })
  .get("/:index", async (req, res) => {
    const { index } = req.params;

    const content = await logger.getLogFileContent(Number(index));

    console.log("content in route");
    console.log(content);

    if (!content) {
      return res.status(404).send("Log file not found");
    }

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(content);
  })
  .get("/delete/:index", async (req, res) => {
    const { index } = req.params;
    res
      .setHeader("Content-Type", "text/html")
      .status(200)
      .send(await logger.deleteLogFile(index));
  });

module.exports = router;
