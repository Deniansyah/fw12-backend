const routes = require("express").Router();
const authMiddleware = require("../middleware/auth.middlware");

routes.use("/casts", require("./casts.route"));
routes.use("/cinemas", require("./cinema.route"));
routes.use("/forgots", require("./forgot.route"));
routes.use("/genres", require("./genre.route"));
routes.use("/movies", require("./movie.route"));
routes.use("/moviecasts", require("./movieCast.route"));
routes.use("/moviegenres", require("./movieGenre.route"));
routes.use("/movieschedules", require("./movieSchedule.route"));
routes.use("/moviescheduletimes", require("./movieScheduleTime.route"));
routes.use("/paymentmethods", require("./paymentMethod.route"));
routes.use("/reversedseats", require("./reversedSeat.route"));
routes.use("/statuss", require("./status.route"));
routes.use("/subscribes", require("./subscribe.route"));
routes.use("/transactions", require("./transaction.route"));
routes.use("/users", require("./users.route"));

routes.use("/auth", require("./auth.router"))

module.exports = routes;
