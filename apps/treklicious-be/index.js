const express = require("express");
const app = express();
const port = process.env.PORT || 3400;

// This is to know if server is up and running
app.get("/", (req, res) =>
  res.status(200).send(`Server is running on port ${port} on ${new Date()}`)
);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
