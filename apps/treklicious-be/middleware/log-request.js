const logger = require("../utils/logger");

async function logRequest(req, res, next) {
  const reqID = req.headers["request-id"] || "| no request id |";
  const reqMethod = req.method || "| no request method |";
  const reqURL = req.url || "| no request url |";
  const reqOrigin = req.headers["origin"] || "| no request origin |";

  await logger.log(
    `${reqID}\t🚨🚨${reqMethod}\t🚨🚨${reqURL}\t🚨🚨${reqOrigin}`
  );

  next();
}

module.exports = logRequest;
