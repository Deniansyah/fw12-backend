const moviesRouter = require('express').Router()
const {
  readAllMovie,
  createMovie,
  updateMovie,
  deleteMovie,
  readMovie,
  upcoming,
  nowShowing,
  detail
} = require("../controllers/movie.controller");

moviesRouter.get("/", readAllMovie);

moviesRouter.get("/upcoming", upcoming);
moviesRouter.get("/now", nowShowing);
moviesRouter.get("/detail/:id", detail);

moviesRouter.post("/", createMovie);
moviesRouter.patch("/:id", updateMovie);
moviesRouter.delete("/:id", deleteMovie);
moviesRouter.get("/:id", readMovie);

module.exports = moviesRouter
