const { USERNAME_EXISTS_RESPONSE } = require("@repo/treklicious-constants");
const { userDetailsModel, userIDModel } = require("../../models");

const logger = require("../../utils/logger");
const { hashPassword } = require("../../utils/password");

async function GETProfile(req, res) {
  const userIDModel_id = req.userIDModel_id;

  try {
    const userDetails = await userDetailsModel
      .findOne({ userIDModel_id })
      .lean();

    if (!userDetails) return res.sendStatus(401);

    res.status(200).json(userDetails);
  } catch (error) {
    logger.log("Error in GETProfile");
    logger.log(error);

    res.sendStatus(500);
  }
}

async function PUTProfile(req, res) {
  const userIDModel_id = req.userIDModel_id;
  const { firstName, lastName, userName, password, profile, preferences } =
    req.body;

  try {
    const duplicateUserName = await userDetailsModel
      .findOne({
        userName,
        userIDModel_id: { $ne: userIDModel_id },
      })
      .lean();

    if (duplicateUserName) {
      return res.status(409).json({ message: USERNAME_EXISTS_RESPONSE });
    }

    const userDetailsObject = await userDetailsModel.findOne({
      userIDModel_id,
    });
    const userIDObject = await userIDModel.findById(userIDModel_id);

    userDetailsObject.firstName = firstName;
    userDetailsObject.lastName = lastName;
    userDetailsObject.userName = userName;
    userDetailsObject.profile = profile;
    userDetailsObject.preferences = preferences;
    userIDObject.userName = userName;

    if (password) userIDObject.password = hashPassword(password);

    const userDetailUpdated = await userDetailsObject.save();
    const userIDUpdated = await userIDObject.save();

    if (userDetailUpdated && userIDUpdated) {
      res.status(200).json({ message: "OK" });
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    logger.log("Error in PUTProfile");
    logger.log(error);

    res.sendStatus(500);
  }
}

module.exports = { GETProfile, PUTProfile };
