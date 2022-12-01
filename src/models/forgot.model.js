const db = require("../helpers/db.helper");

exports.selectAllForgot = (cb) => {
  db.query('SELECT * FROM "forgot"', cb);
};

exports.insertForgot = (data, cb) => {
  db.query(
    'INSERT INTO forgot ("userId", "email", "code") VALUES ($1, $2, $3) RETURNING *',
    [data.userId, data.email, data.code],
    cb
  );
};

exports.changeForgot = (id, data, cb) => {
  db.query(
    'UPDATE "forgot" SET "userId" = COALESCE(NULLIF($2, \'\')::INT, "userId"), "email" = COALESCE(NULLIF($3, \'\'), "email"), "code" = COALESCE(NULLIF($4, \'\'), "code") WHERE id = $1 RETURNING *',
    [id, data.userId, data.email, data.code],
    cb
  );
};

exports.dropForgot = (id, cb) => {
  db.query('DELETE FROM "forgot" WHERE id = $1', [id], cb);
};

exports.selectForgot = (id, cb) => {
  db.query('SELECT * FROM "forgot" WHERE id = $1', [id], cb);
};

exports.selectForgotByEmailAndCode = (data, cb) => {
  db.query('SELECT * FROM "forgot" WHERE email = $1 AND code = $2',
  [data.email, data.code],
  cb);
};
