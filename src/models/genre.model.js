const db = require("../helpers/db.helper");

exports.selectAllGenre = (cb) => {
  db.query('SELECT * FROM "genre"', cb);
};

exports.insertGenre = (data, cb) => {
  db.query(
    'INSERT INTO genre ("name") VALUES ($1) RETURNING *',
    [data.name],
    cb
  );
};

exports.updateGenre = (id, data, cb) => {
  db.query(
    'UPDATE genre SET "name" = COALESCE(NULLIF($2 , \'\'), "name") WHERE id = $1 RETURNING *',
    [id, data.name],
    cb
  );
};

exports.deleteGenre = (id, cb) => {
  db.query('DELETE FROM genre WHERE id = $1', [id], cb);
};

exports.selectGenre = (id, cb) => {
  db.query('SELECT * FROM genre WHERE id = $1', [id], cb);
};
