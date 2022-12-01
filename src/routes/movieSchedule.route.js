const movieScheduleRouter = require("express").Router();
const {
  readAllMovieSchedule,
  createMovieSchedule,
  updateMovieSchedule,
  deleteMovieSchedule,
  readMovieSchedule,
} = require("../controllers/movieSchedule.controller");

movieScheduleRouter.get("/", readAllMovieSchedule);
movieScheduleRouter.post("/", createMovieSchedule);
movieScheduleRouter.patch("/:id", updateMovieSchedule);
movieScheduleRouter.delete("/:id", deleteMovieSchedule);
movieScheduleRouter.get("/:id", readMovieSchedule);

module.exports = movieScheduleRouter;
