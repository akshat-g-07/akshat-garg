const express = require("express");
const app = express();
const port = process.env.PORT || 3400;

const mongoose = require("mongoose");
cookieParser = require("cookie-parser");
const dbConnect = require("./config/db-connect");
const logger = require("./utils/logger");

const middleware = require("./middleware");

const openRoutes = require("./config/open-routes");
const routes = require("./routes");

const cors = require("cors");
const corsOptions = require("./config/cors-options");

app.use(cors(corsOptions));

dbConnect();

app.use(express.json());

app.use(cookieParser());

app.use(middleware);

app.get("/", (req, res) => {
  const ADMIN_CODE = process.env.ADMIN_CODE;

  const response = openRoutes
    .map(
      ({ route, description }) =>
        `<div>
      <a href=${route}?code=${ADMIN_CODE} target="_blank">
        ${route}
      </a>
      <p>${description}</p>
    </div>`
    )
    .join("");
  res.status(200).send(response);
});
app.use("/health", require("./health"));
app.use("/logs", require("./logs"));

app.use("/api", routes);

mongoose.connection.once("open", async () => {
  console.log("Mongoose Connected");
  await logger.log("Mongoose Connected");

  app.listen(port, async () => {
    await logger.log(`🚀🚀🚀App listening on port ${port}🚀🚀🚀`);
    console.log(`🚀🚀🚀App listening on port ${port}🚀🚀🚀`);
  });
});

mongoose.connection.on("error", async (err) => {
  await logger.log(`Error in mongoose connection: ${err}`);
  console.log(`Error in mongoose connection: ${err}`);
});
