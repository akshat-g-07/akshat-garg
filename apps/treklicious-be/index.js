const express = require("express");
const app = express();
const port = process.env.PORT || 3400;

const mongoose = require("mongoose");
const dbConnect = require("./config/dbConn");

dbConnect();

app.use("/health", require("./health"));

mongoose.connection.once("open", () => {
  console.log("Mongoose Connected");

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(`Error in mongoose connection: ${err}`);
});
