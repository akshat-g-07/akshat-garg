const express = require("express");
const app = express();
const port = process.env.PORT || 3400;

const mongoose = require("mongoose");
const dbConnect = require("./config/dbConn");
const Logger = require("./utils/logger");

const logger = new Logger();

dbConnect();

app.use("/health", require("./health"));

mongoose.connection.once("open", async () => {
  console.log("Mongoose Connected");
  await logger.log("Mongoose Connected");

  app.listen(port, async () => {
    await logger.log(`🚀🚀🚀App listening on port ${port}🚀🚀🚀`);
    console.log(`🚀🚀🚀App listening on port ${port}🚀🚀🚀`);
  });
});

mongoose.connection.on("error", async (err) => {
  await logger.log(`Error in mongoose connection: ${err}`);
  console.log(`Error in mongoose connection: ${err}`);
});
