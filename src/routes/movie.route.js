const moviesRouter = require('express').Router()
const {
  readAllMovie,
  createMovie,
  updateMovie,
  deleteMovie,
  readMovie,
} = require("../controllers/movie.controller");

moviesRouter.get("/", readAllMovie);
moviesRouter.post("/", createMovie);
moviesRouter.patch("/:id", updateMovie);
moviesRouter.delete("/:id", deleteMovie);
moviesRouter.get("/:id", readMovie);

module.exports = moviesRouter
