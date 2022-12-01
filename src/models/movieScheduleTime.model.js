const db = require("../helpers/db.helper");

exports.selectAllMovieScheduleTime = (cb) => {
  db.query('SELECT * FROM "movieScheduleTime"', cb);
};

exports.insertMovieScheduleTime = (data, cb) => {
  db.query(
    'INSERT INTO "movieScheduleTime" ("time", "movieScheduleId") VALUES ($1, $2) RETURNING *',
    [data.time, data.movieScheduleId],
    cb
  );
};

exports.changeMovieScheduleTime = (id, data, cb) => {
  db.query(
    'UPDATE "movieScheduleTime" SET "time" = COALESCE(NULLIF($2, \'\')::TIME, "time"), "movieScheduleId" = COALESCE(NULLIF($3, \'\')::INT, "movieScheduleId") WHERE id = $1 RETURNING *',
    [id, data.time, data.movieScheduleId],
    cb
  );
};

exports.dropMovieScheduleTime = (id, cb) => {
  db.query('DELETE FROM "movieScheduleTime" WHERE id = $1', [id], cb);
};

exports.selectMovieScheduleTime = (id, cb) => {
  db.query('SELECT * FROM "movieScheduleTime" WHERE id = $1', [id], cb);
};
