const rateLimit = require("express-rate-limit");
const logger = require("../utils/logger");

const rateLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: async (req, res) => {
    if (req.url.includes("/auth")) return 5;
    return 10;
  },
  message: {
    error: `Too Many Requests! Please try again after sometime.`,
  },
  handler: (req, res, next, options) => {
    console.log("7");

    logger.log(
      `Too many requests: ${options.message.error}\t${req.url}\t${req.headers.origin}`
    );
    console.log("8");
    return res.status(options.statusCode).send(options.message);
    console.log("9");
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = rateLimiter;
