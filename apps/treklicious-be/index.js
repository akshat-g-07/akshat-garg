const express = require("express");
const app = express();
const port = process.env.PORT || 3400;

const mongoose = require("mongoose");
const dbConnect = require("./config/dbConn");
const logger = require("./utils/logger");

const middleware = require("./middleware");

const openRoutes = require("./config/openRoutes");
const routes = require("./routes");

dbConnect();

app.use(middleware);

app.get("/", (req, res) => {
  const response = openRoutes
    .map(
      ({ route, description }) =>
        `<div>
      <a href=${route} target="_blank">
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
