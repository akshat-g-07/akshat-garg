const { userIDModel } = require("../../models");
const {
  BAD_REQUEST_RESPONSE,
  USER_NOT_FOUND_RESPONSE,
  PASSWORDS_DONT_MATCH_RESPONSE,
} = require("@repo/treklicious-constants");

const logger = require("../../utils/logger");
const { getAccessToken, getRefreshToken } = require("../../utils/tokens");
const { verifyPassword } = require("../../utils/password");

async function Login(req, res) {
  const { userName, password } = req.body;

  if (!userName || !password)
    return res.status(400).json({ message: BAD_REQUEST_RESPONSE });

  try {
    const foundUser = await userIDModel.findOne({ userName });

    if (!foundUser) {
      return res.status(401).json({ message: USER_NOT_FOUND_RESPONSE });
    }

    const match = verifyPassword(password, foundUser.password);

    if (!match) {
      return res.status(401).json({ message: PASSWORDS_DONT_MATCH_RESPONSE });
    }

    const accessToken = getAccessToken(foundUser._id);

    const refreshToken = getRefreshToken(foundUser._id);

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ accessToken });
  } catch (error) {
    logger.log("Error in Login");
    logger.log(error);

    res.sendStatus(500);
  }
}

module.exports = Login;
