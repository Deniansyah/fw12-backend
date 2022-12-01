const castRouter = require("express").Router();
const {
  readAllCast,
  createCast,
  updateCast,
  deleteCast,
  readCast,
} = require("../controllers/casts.controller");

castRouter.get("/", readAllCast);
castRouter.post("/", createCast);
castRouter.patch("/:id", updateCast);
castRouter.delete("/:id", deleteCast);
castRouter.get("/:id", readCast);

module.exports = castRouter;
