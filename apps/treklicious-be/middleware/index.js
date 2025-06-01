const express = require("express");
const router = express.Router();

const NODE_ENV = process.env.NODE_ENV;
const ADMIN_CODE = process.env.ADMIN_CODE;

const verifyJWT = require("./verify-jwt");
const logRequest = require("./log-request");
const rateLimiter = require("./rate-limiter");

const openRoutes = require("../config/open-routes");
const CheckProtectedRoute = require("../config/protected-routes");

const adminRoutes = openRoutes.map((route) => route.route);
adminRoutes.push("/");

router.use(logRequest, (req, res, next) => {
  if (adminRoutes.includes(req.path)) {
    const code = req.query.code;
    if (code !== ADMIN_CODE) return res.status(401).send("Unauthorized");
    return next();
  }

  if (NODE_ENV === "production") {
    rateLimiter(req, res, next);
  }

  if (CheckProtectedRoute(req.url)) return verifyJWT(req, res, next);

  next();
});

module.exports = router;
