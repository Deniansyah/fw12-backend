const db = require("../helpers/db.helper");

exports.selectAllSubscribe = (cb) => {
  db.query('SELECT * FROM "subscribe"', cb);
};

exports.insertSubscribe = (data, cb) => {
  db.query(
    'INSERT INTO "subscribe" ("email") VALUES ($1) RETURNING *',
    [data.email],
    cb
  );
};

exports.changeSubscribe = (id, data, cb) => {
  db.query(
    'UPDATE "subscribe" SET "email" = COALESCE(NULLIF($2, \'\'), "email") WHERE id = $1 RETURNING *',
    [id, data.email],
    cb
  );
};

exports.dropSubscribe = (id, cb) => {
  db.query('DELETE FROM "subscribe" WHERE id = $1', [id], cb);
};

exports.selectSubscribe = (id, cb) => {
  db.query('SELECT * FROM "subscribe" WHERE id = $1', [id], cb);
};
