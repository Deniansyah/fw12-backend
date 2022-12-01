const db = require("../helpers/db.helper");

exports.selectAllMovieSchedule = (cb) => {
  db.query('SELECT * FROM "movieSchedule"', cb);
};

exports.insertMovieSchedule = (data, cb) => {
  db.query(
    'INSERT INTO "movieSchedule" ("movieId", "cinemaId", "price", "startDate", "endDate") VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [data.movieId, data.cinemaId, data.price, data.startDate, data.endDate],
    cb
  );
};

exports.changeMovieSchedule = (id, data, cb) => {
  db.query(
    'UPDATE "movieSchedule" SET "movieId" = COALESCE(NULLIF($2, \'\')::INT, "movieId"), "cinemaId" = COALESCE(NULLIF($3, \'\')::INT, "cinemaId"), "price" = COALESCE(NULLIF($4, \'\')::BIGINT, "price"), "startDate" = COALESCE(NULLIF($5, \'\')::DATE, "startDate"), "endDate" = COALESCE(NULLIF($6, \'\')::DATE, "endDate") WHERE id = $1 RETURNING *',
    [id, data.movieId, data.cinemaId, data.price, data.startDate, data.endDate],
    cb
  );
};

exports.dropMovieSchedule = (id, cb) => {
  db.query('DELETE FROM "movieSchedule" WHERE id = $1', [id], cb);
};

exports.selectMovieSchedule = (id, cb) => {
  db.query('SELECT * FROM "movieSchedule" WHERE id = $1', [id], cb);
};
