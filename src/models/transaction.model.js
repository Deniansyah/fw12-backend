const db = require("../helpers/db.helper");

exports.selectAllTransaction = (cb) => {
  db.query('SELECT * FROM "transaction"', cb);
};

exports.insertTransaction = (data, cb) => {
  db.query(
    'INSERT INTO "transaction" ("bokingDate", "movieId", "cinemaId", "movieScheduleId", "fullName", "email", "phoneNumber", "statusId") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    [
      data.bokingDate,
      data.movieId,
      data.cinemaId,
      data.movieScheduleId,
      data.fullName,
      data.email,
      data.phoneNumber,
      data.statusId,
    ],
    cb
  );
};

exports.changeTransaction = (id, data, cb) => {
  db.query(
    'UPDATE "transaction" SET "bokingDate" = COALESCE(NULLIF($2, \'\')::DATE, "bokingDate"), "movieId" = COALESCE(NULLIF($3, \'\')::INT, "movieId"), "cinemaId" = COALESCE(NULLIF($4, \'\')::INT, "cinemaId"), "movieScheduleId" = COALESCE(NULLIF($5, \'\')::INT, "movieScheduleId"), "fullName" = COALESCE(NULLIF($6, \'\'), "fullName"), "email" = COALESCE(NULLIF($7, \'\'), "email"), "phoneNumber" = COALESCE(NULLIF($8, \'\'), "phoneNumber"), "statusId" = COALESCE(NULLIF($9, \'\')::INT, "statusId") WHERE id = $1 RETURNING *',
    [
      id,
      data.bokingDate,
      data.movieId,
      data.cinemaId,
      data.movieScheduleId,
      data.fullName,
      data.email,
      data.phoneNumber,
      data.statusId,
    ],
    cb
  );
};

exports.dropTransaction = (id, cb) => {
  db.query('DELETE FROM "transaction" WHERE id = $1', [id], cb);
};

exports.selectTransaction = (id, cb) => {
  db.query('SELECT * FROM "transaction" WHERE id = $1', [id], cb);
};
