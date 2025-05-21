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

  await userIDModel.syncIndexes();
  await userDetailsModel.syncIndexes();
  await trekDetailsModel.syncIndexes();

  await mongoose.disconnect();
}

if (NODE_ENV !== "production") {
  main();
}
