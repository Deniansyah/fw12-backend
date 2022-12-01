const statusRouter = require("express").Router();
const {
  readAllStatus,
  createStatus,
  updateStatus,
  deleteStatus,
  readStatus,
} = require("../controllers/status.controller");

statusRouter.get("/", readAllStatus);
statusRouter.post("/", createStatus);
statusRouter.patch("/:id", updateStatus);
statusRouter.delete("/:id", deleteStatus);
statusRouter.get("/:id", readStatus);

module.exports = statusRouter;
