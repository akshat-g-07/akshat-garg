const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.sendStatus(403);
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.userIDModel_id = decoded.userIDModel_id;
    next();
  });
}

module.exports = verifyJWT;
