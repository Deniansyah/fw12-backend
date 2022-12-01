const db = require("../helpers/db.helper");

exports.selectAllCinema = (cb) => {
  db.query('SELECT * FROM "cinema"', cb);
};

exports.insertCinema = (data, cb) => {
  db.query(
    'INSERT INTO cinema ("picture", "name", "address", "city") VALUES ($1, $2, $3, $4) RETURNING *',
    [data.picture, data.name, data.address, data.city],
    cb
  );
};

exports.changeCinema = (id, data, cb) => {
  db.query(
    'UPDATE cinema SET "picture" = COALESCE(NULLIF($2, \'\'), "picture"), "name" = COALESCE(NULLIF($3, \'\'), "name"), "address" = COALESCE(NULLIF($4, \'\'), "address"), "city" = COALESCE(NULLIF($5, \'\'), "city") WHERE id = $1 RETURNING *',
    [id, data.picture, data.name, data.address, data.city],
    cb
  );
};

exports.dropCinema = (id, cb) => {
  db.query('DELETE FROM cinema WHERE id = $1', [id], cb);
};

exports.selectCinema = (id, cb) => {
  db.query('SELECT * FROM cinema WHERE id = $1', [id], cb);
};
