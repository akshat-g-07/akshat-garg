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

  await userIDModel.deleteMany();
  await userDetailsModel.deleteMany();

  const userIDData = [];
  for (let i = 1; i < 6; i++) {
    userIDData.push({
      userName: `user${i}`,
      password: `password${i}`,
    });
  }

  const userIDDocs = await userIDModel.insertMany(userIDData);
  console.log("Dummy data inserted into userIDModel");

  const treks = await trekDetailsModel.find();
  const difficulty = ["Easy", "Medium", "Hard"];
  const season = ["Summer", "Monsoon", "Winter"];
  const state = ["Uttarakhand", "Maharashtra", "Sikkim", "West Bengal"];

  const userDetailData = [];
  userIDDocs.forEach((doc, indx) => {
    const num1 = Math.floor(Math.random() * treks.length);
    const num2 = Math.floor(Math.random() * treks.length);
    const startIndx = num1 < num2 ? num1 : num2;
    const endIndx = num1 > num2 ? num1 : num2;

    userDetailData.push({
      userIDModel_id: doc._id,
      firstName: `John_${indx}`,
      lastName: `Doe_${indx}`,
      userName: `johnDoe_${indx}`,
      email: `john.doe${indx}@example.com`,
      profile: `https://i.pravatar.cc/300?img=${Math.floor(Math.random() * 70)}`,
      favorites: treks.map((trek) => trek._id).slice(startIndx, endIndx),
      preferences: {
        state: state[Math.floor(Math.random() * state.length)],
        season: season[Math.floor(Math.random() * season.length)],
        difficulty: difficulty[Math.floor(Math.random() * season.length)],
      },
    });
  });
  await userDetailsModel.insertMany(userDetailData);
  console.log("Dummy data inserted into userDetailsModel");

  await mongoose.disconnect();
  console.log("Disconnected");
}

if (NODE_ENV !== "production") {
  main();
}
