const db = require("../helpers/db.helper");

exports.selectAllReversedSeat = (cb) => {
  db.query('SELECT * FROM "reversedSeat"', cb);
};

exports.insertReversedSeat = (data, cb) => {
  db.query(
    'INSERT INTO "reversedSeat" ("seatNum", "transactionId") VALUES ($1, $2) RETURNING *',
    [data.seatNum, data.transactionId],
    cb
  );
};

exports.changeReversedSeat = (id, data, cb) => {
  db.query(
    'UPDATE "reversedSeat" SET "seatNum" = COALESCE(NULLIF($2, \'\'), "seatNum"), "transactionId" = COALESCE(NULLIF($3, \'\')::INT, "transactionId") WHERE id = $1 RETURNING *',
    [id, data.seatNum, data.transactionId],
    cb
  );
};

exports.dropReversedSeat = (id, cb) => {
  db.query('DELETE FROM "reversedSeat" WHERE id = $1', [id], cb);
};

exports.selectReversedSeat = (id, cb) => {
  db.query('SELECT * FROM "reversedSeat" WHERE id = $1', [id], cb);
};
