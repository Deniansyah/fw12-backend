const genreRouter = require("express").Router();
const {
  readAllGenre,
  createGenre,
  updateGenre,
  deleteGenre,
  readGenre,
} = require("../controllers/genre.controller");

genreRouter.get("/", readAllGenre);
genreRouter.post("/", createGenre);
genreRouter.patch("/:id", updateGenre);
genreRouter.delete("/:id", deleteGenre);
genreRouter.get("/:id", readGenre);

module.exports = genreRouter;
