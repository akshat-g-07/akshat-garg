const mongoose = require("mongoose");
const express = require("express");
const { GetDateTime } = require("../utils/date-time");
const router = express.Router();

function getDbState() {
  const connectionState = mongoose.connection.readyState;

  let dbStatus;
  switch (connectionState) {
    case 0:
      dbStatus = "disconnected";
      break;
    case 1:
      dbStatus = "connected";
      break;
    case 2:
      dbStatus = "connecting";
      break;
    case 3:
      dbStatus = "disconnecting";
      break;
    default:
      dbStatus = "unknown";
  }

  return dbStatus;
}

router
  .get("/", (req, res) => {
    res.status(200).send({
      server: "Running",
      db: getDbState(),
      timestamp: GetDateTime(),
    });
  })
  .get("/db", (req, res) => {
    res.status(200).send({
      db: getDbState(),
      timestamp: GetDateTime(),
    });
  })
  .get("/server", (req, res) => {
    res.status(200).send({
      server: "Running",
      timestamp: GetDateTime(),
    });
  });

module.exports = router;
