const jwt = require("jsonwebtoken");
const logger = require("./logger");

function getAccessToken(userID) {
  logger.log(`getAccessToken=> ${userID}`);
  return jwt.sign(
    {
      userIDModel_id: userID,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
}

function getRefreshToken(userID) {
  logger.log(`getRefreshToken=> ${userID}`);

  return jwt.sign(
    {
      userIDModel_id: userID,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
}

module.exports = { getAccessToken, getRefreshToken };
