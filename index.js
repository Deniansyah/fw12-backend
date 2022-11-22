const express = require("express");

const app = express();

app.use('/', require('./src/routes'))

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Beckend is running well",
  });
});

app.listen(8888, () => {
  console.log("App listening to port 8888");
});
