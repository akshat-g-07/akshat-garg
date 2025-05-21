const { userDetailsModel, userIDModel } = require("../../models");
const {
  BAD_REQUEST_RESPONSE,
  EMAIL_EXISTS_RESPONSE,
  USERNAME_EXISTS_RESPONSE,
} = require("@repo/treklicious-constants");

const logger = require("../../utils/logger");
const { hashPassword } = require("../../utils/password");
const { getAccessToken, getRefreshToken } = require("../../utils/tokens");

async function Signup(req, res) {
  const { firstName, lastName, userName, email, password, profile } = req.body;

  if (!firstName || !lastName || !userName || !email || !password || !profile)
    return res.status(400).json({ message: BAD_REQUEST_RESPONSE });

  try {
    const duplicateUserName = await userDetailsModel
      .findOne({ userName })
      .lean();
    if (duplicateUserName)
      return res.status(409).json({ message: USERNAME_EXISTS_RESPONSE });

    const duplicateMail = await userDetailsModel.findOne({ email }).lean();
    if (duplicateMail)
      return res.status(409).json({ message: EMAIL_EXISTS_RESPONSE });

    const hashedPassword = hashPassword(password);
    const userIDObject = { userName, password: hashedPassword };
    const userIDCreated = await userIDModel.create(userIDObject);

    const preferences = {
      state: "NA",
      season: "NA",
      difficulty: "NA",
    };

    const userDetailsObject = {
      userIDModel_id: userIDCreated._id,
      firstName,
      lastName,
      userName,
      email,
      profile,
      preferences,
    };

    const userDetailCreated = await userDetailsModel.create(userDetailsObject);

    if (userDetailCreated && userIDCreated) {
      const accessToken = getAccessToken(userIDCreated._id);

      const refreshToken = getRefreshToken(userIDCreated._id);

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(201).json({ accessToken });
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    logger.log("Error in Signup");
    logger.log(error);

    res.sendStatus(500);
  }
}

module.exports = Signup;
