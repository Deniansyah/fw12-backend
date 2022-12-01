const db = require("../helpers/db.helper");

exports.selectAllMovieGenre = (cb) => {
  db.query('SELECT * FROM "movieGenre"', cb);
};

exports.insertMovieGenre = (data, cb) => {
  db.query(
    'INSERT INTO "movieGenre" ("movieId", "genreId") VALUES ($1, $2) RETURNING *',
    [data.movieId, data.genreId],
    cb
  );
};

exports.changeMovieGenre = (id, data, cb) => {
  db.query(
    'UPDATE "movieGenre" SET "movieId" = COALESCE(NULLIF($2, \'\')::INT, "movieId"), "genreId" = COALESCE(NULLIF($3, \'\')::INT, "genreId") WHERE id = $1 RETURNING *',
    [id, data.movieId, data.genreId],
    cb
  );
};

exports.dropMovieGenre = (id, cb) => {
  db.query('DELETE FROM "movieGenre" WHERE id = $1', [id], cb);
};

exports.selectMovieGenre = (id, cb) => {
  db.query('SELECT * FROM "movieGenre" WHERE id = $1', [id], cb);
};
