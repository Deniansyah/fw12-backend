const forgotRouter = require("express").Router();
const {
  readAllForgot,
  createForgot,
  updateForgot,
  deleteForgot,
  readForgot,
} = require("../controllers/forgot.controller");

forgotRouter.get("/", readAllForgot);
forgotRouter.post("/", createForgot);
forgotRouter.patch("/:id", updateForgot);
forgotRouter.delete("/:id", deleteForgot);
forgotRouter.get("/:id", readForgot);

module.exports = forgotRouter;
