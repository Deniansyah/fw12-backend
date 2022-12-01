const db = require("../helpers/db.helper")

exports.selectAllCast = (filter, cb) => {
  db.query(`SELECT * FROM "casts" WHERE name LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`,
  [filter.limit, filter.page, `%${filter.search}%`],
  cb);
};

exports.selectCountAllCast = (filter, cb) => {
  db.query(
    `SELECT COUNT("name") AS "totalData" FROM "casts" WHERE name LIKE $1`,
    [`%${filter.search}%`],
    cb
  );
};

exports.insertCast = (data, cb) => {
  db.query('INSERT INTO casts ("name") VALUES ($1) RETURNING *', [data.name], cb)
}

exports.updateCast = (id, data, cb) => {
  db.query('UPDATE casts SET "name" = COALESCE(NULLIF($2 , \'\'), "name") WHERE id = $1 RETURNING *', [id, data.name], cb)
}

exports.deleteCast = (id, cb) => {
  db.query('DELETE FROM casts WHERE id = $1', [id], cb)
}

exports.selectCast = (id, cb) => {
  db.query('SELECT * FROM casts WHERE id = $1', [id], cb)
}
