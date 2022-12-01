const db = require("../helpers/db.helper");

exports.selectAllMovieCast = (cb) => {
  db.query('SELECT * FROM "movieCast"', cb);
};

exports.insertMovieCast = (data, cb) => {
  db.query(
    'INSERT INTO "movieCast" ("movieId", "castId") VALUES ($1, $2) RETURNING *',
    [data.movieId, data.castId],
    cb
  );
};

exports.changeMovieCast = (id, data, cb) => {
  db.query(
    'UPDATE "movieCast" SET "movieId" = COALESCE(NULLIF($2, \'\')::INT, "movieId"), "castId" = COALESCE(NULLIF($3, \'\')::INT, "castId") WHERE id = $1 RETURNING *',
    [id, data.movieId, data.castId],
    cb
  );
};

exports.dropMovieCast = (id, cb) => {
  db.query('DELETE FROM "movieCast" WHERE id = $1', [id], cb);
};

exports.selectMovieCast = (id, cb) => {
  db.query('SELECT * FROM "movieCast" WHERE id = $1', [id], cb);
};
