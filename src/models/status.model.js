const db = require("../helpers/db.helper");

exports.selectAllStatus = (cb) => {
  db.query('SELECT * FROM "status"', cb);
};

exports.insertStatus = (data, cb) => {
  db.query(
    'INSERT INTO "status" ("name") VALUES ($1) RETURNING *',
    [data.name],
    cb
  );
};

exports.changeStatus = (id, data, cb) => {
  db.query(
    'UPDATE status SET "name" = COALESCE(NULLIF($2, \'\'), "name") WHERE id = $1 RETURNING *',
    [id, data.name],
    cb
  );
};

exports.dropStatus = (id, cb) => {
  db.query('DELETE FROM "status" WHERE id = $1', [id], cb);
};

exports.selectStatus = (id, cb) => {
  db.query('SELECT * FROM "status" WHERE id = $1', [id], cb);
};
