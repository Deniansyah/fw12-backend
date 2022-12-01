const reversedSeatRouter = require("express").Router();
const {
  readAllReversedSeat,
  createReversedSeat,
  updateReversedSeat,
  deleteReversedSeat,
  readReversedSeat,
} = require("../controllers/reversedSeat.controller");

reversedSeatRouter.get("/", readAllReversedSeat);
reversedSeatRouter.post("/", createReversedSeat);
reversedSeatRouter.patch("/:id", updateReversedSeat);
reversedSeatRouter.delete("/:id", deleteReversedSeat);
reversedSeatRouter.get("/:id", readReversedSeat);

module.exports = reversedSeatRouter;
