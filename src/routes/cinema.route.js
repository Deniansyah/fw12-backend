const cinemaRouter = require("express").Router();
const {
  readAllCinema,
  createCinema,
  updateCinema,
  deleteCinema,
  readCinema,
} = require("../controllers/cinema.controller");

cinemaRouter.get("/", readAllCinema);
cinemaRouter.post("/", createCinema);
cinemaRouter.patch("/:id", updateCinema);
cinemaRouter.delete("/:id", deleteCinema);
cinemaRouter.get("/:id", readCinema);

module.exports = cinemaRouter;
