const db = require("../helpers/db.helper");

exports.selectAllPaymentMethod = (cb) => {
  db.query('SELECT * FROM "paymentMethod"', cb);
};

exports.insertPaymentMethod = (data, cb) => {
  db.query(
    'INSERT INTO "paymentMethod" ("picture", "name") VALUES ($1, $2) RETURNING *',
    [data.picture, data.name],
    cb
  );
};

exports.changePaymentMethod = (id, data, cb) => {
  db.query(
    'UPDATE "paymentMethod" SET "picture" = COALESCE(NULLIF($2, \'\'), "picture"), "name" = COALESCE(NULLIF($3, \'\'), "name") WHERE id = $1 RETURNING *',
    [id, data.picture, data.name],
    cb
  );
};

exports.dropPaymentMethod = (id, cb) => {
  db.query('DELETE FROM "paymentMethod" WHERE id = $1', [id], cb);
};

exports.selectPaymentMethod = (id, cb) => {
  db.query('SELECT * FROM "paymentMethod" WHERE id = $1', [id], cb);
};
