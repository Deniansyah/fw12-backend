const movieScheduleTimeRouter = require("express").Router();
const {
  readAllMovieScheduleTime,
  createMovieScheduleTime,
  updateMovieScheduleTime,
  deleteMovieScheduleTime,
  readMovieScheduleTime,
} = require("../controllers/movieScheduleTime.controller");

movieScheduleTimeRouter.get("/", readAllMovieScheduleTime);
movieScheduleTimeRouter.post("/", createMovieScheduleTime);
movieScheduleTimeRouter.patch("/:id", updateMovieScheduleTime);
movieScheduleTimeRouter.delete("/:id", deleteMovieScheduleTime);
movieScheduleTimeRouter.get("/:id", readMovieScheduleTime);

module.exports = movieScheduleTimeRouter;
