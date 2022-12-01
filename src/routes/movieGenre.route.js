const movieGenreRouter = require("express").Router();
const {
  readAllMovieGenre,
  createMovieGenre,
  updateMovieGenre,
  deleteMovieGenre,
  readMovieGenre,
} = require("../controllers/movieGenre.controller");

movieGenreRouter.get("/", readAllMovieGenre);
movieGenreRouter.post("/", createMovieGenre);
movieGenreRouter.patch("/:id", updateMovieGenre);
movieGenreRouter.delete("/:id", deleteMovieGenre);
movieGenreRouter.get("/:id", readMovieGenre);

module.exports = movieGenreRouter;
