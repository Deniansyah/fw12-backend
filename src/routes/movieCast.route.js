const movieCastRouter = require("express").Router();
const {
  readAllMovieCast,
  createMovieCast,
  updateMovieCast,
  deleteMovieCast,
  readMovieCast,
} = require("../controllers/movieCast.controller");

movieCastRouter.get("/", readAllMovieCast);
movieCastRouter.post("/", createMovieCast);
movieCastRouter.patch("/:id", updateMovieCast);
movieCastRouter.delete("/:id", deleteMovieCast);
movieCastRouter.get("/:id", readMovieCast);

module.exports = movieCastRouter;
