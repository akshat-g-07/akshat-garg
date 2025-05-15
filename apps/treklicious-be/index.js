const express = require("express");
const app = express();
const port = process.env.PORT || 3400;

const mongoose = require("mongoose");
const dbConnect = require("./config/dbConn");

dbConnect();

// This is to know if server is up and running
app.get("/", (req, res) =>
  res.status(200).send(`Server is running on port ${port} on ${new Date()}`)
);

mongoose.connection.once("open", () => {
  console.log("Mongoose Connected");

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(`Error in mongoose connection: ${err}`);
});
