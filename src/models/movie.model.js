const db = require("../helpers/db.helper");

exports.selectAllMovie = (cb) => {
  db.query('SELECT * FROM "movie"', cb);
};

exports.insertMovie = (data, cb) => {
  db.query(
    'INSERT INTO movie ("picture", "title", "releaseDate", "director", "duration", "synopsis") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [
      data.picture,
      data.title,
      data.releaseDate,
      data.director,
      data.duration,
      data.synopsis
    ],
    cb
  );
};

exports.changeMovie = (id, data, cb) => {
  db.query(
    'UPDATE movie SET "picture" = COALESCE(NULLIF($2, \'\'), "picture"), "title" = COALESCE(NULLIF($3, \'\'), "title"), "releaseDate" = COALESCE(NULLIF($4, \'\')::TIMESTAMP, "releaseDate"), "director" = COALESCE(NULLIF($5, \'\'), "director"), "duration" = COALESCE(NULLIF($6, \'\')::TIME, "duration"), "synopsis" = COALESCE(NULLIF($7, \'\'), "synopsis") WHERE id = $1 RETURNING *',
    [
      id,
      data.picture,
      data.title,
      data.releaseDate,
      data.director,
      data.duration,
      data.synopsis,
    ],
    cb
  );
};

exports.dropMovie = (id, cb) => {
  db.query('DELETE FROM movie WHERE id = $1', [id], cb);
};

exports.selectMovie = (id, cb) => {
  db.query('SELECT * FROM movie WHERE id = $1', [id], cb);
};
