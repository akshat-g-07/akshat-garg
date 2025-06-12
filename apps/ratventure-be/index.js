const express = require("express");
const app = express();
const port = process.env.PORT || 3600;

const cors = require("cors");
const corsOptions = require("./config/cors-options");

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.status(200).send("Running");
});

app.listen(port, async () => {
  console.log(`🚀🚀🚀App listening on port ${port}🚀🚀🚀`);
});
