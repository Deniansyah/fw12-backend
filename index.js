const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "ok",
  });
});

app.listen(8888, () => {
  console.log("App listening to port 8888");
});
