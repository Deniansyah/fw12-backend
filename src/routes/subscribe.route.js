const subscribeRouter = require("express").Router();
const {
  readAllSubscribe,
  createSubscribe,
  updateSubscribe,
  deleteSubscribe,
  readSubscribe,
} = require("../controllers/subscribe.controller");

subscribeRouter.get("/", readAllSubscribe);
subscribeRouter.post("/", createSubscribe);
subscribeRouter.patch("/:id", updateSubscribe);
subscribeRouter.delete("/:id", deleteSubscribe);
subscribeRouter.get("/:id", readSubscribe);

module.exports = subscribeRouter;
