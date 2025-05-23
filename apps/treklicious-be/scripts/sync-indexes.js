const mongoose = require("mongoose");

const NODE_ENV = process.env.NODE_ENV;

const {
  userIDModel,
  userDetailsModel,
  trekDetailsModel,
} = require("../models");
const dbConnect = require("../config/db-connect");

async function main() {
  await dbConnect();
  console.log("Connected");

  await userIDModel.syncIndexes();
  await userDetailsModel.syncIndexes();
  await trekDetailsModel.syncIndexes();

  console.log("Success, Disconnecting!");

  await mongoose.disconnect();
  console.log("Disconnected");
}

if (NODE_ENV !== "production") {
  main();
}
