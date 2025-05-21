const {
  PLEASE_LOGIN_RESPONSE,
  UNAUTHORIZED_RESPONSE,
} = require("@repo/treklicious-constants");
const { userIDModel } = require("../../models");
const jwt = require("jsonwebtoken");

async function Refresh(req, res) {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.status(401).json({ message: PLEASE_LOGIN_RESPONSE });
  }

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,

    async (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      }

      const foundUser = await userIDModel.findById(decoded.userIDModel_id);

      if (!foundUser) {
        return res.status(401).json({ message: UNAUTHORIZED_RESPONSE });
      }

      const accessToken = getAccessToken(foundUser._id);

      res.status(200).json({ accessToken });
    }
  );
}

module.exports = Refresh;
