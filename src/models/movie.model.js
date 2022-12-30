const db = require("../helpers/db.helper");

exports.selectAllMovie = (filter, cb) => {
  db.query(
    `SELECT * FROM "movie" WHERE title LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`,
    [filter.limit, filter.page, `%${filter.search}%`],
    cb
  );
};

exports.selectCountAllMovie = (filter, cb) => {
  db.query(
    `SELECT COUNT("title") AS "totalData" FROM "movie" WHERE title LIKE $1`,
    [`%${filter.search}%`],
    cb
  );
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

exports.upcomingMovie = (data, cb) => {
  const sql = `SELECT * FROM "movie" WHERE date_part('year', "releaseDate")::TEXT = COALESCE(NULLIF($1, ''), date_part('year', current_date)::TEXT) AND
  date_part('month', "releaseDate")::TEXT = COALESCE(NULLIF($2, ''), date_part('month', current_date)::TEXT)`;
  const values = [data.year, data.month]
  db.query(sql, values, cb)
}

exports.nowShowingMovie = (cb) => {
  const sql = `
  SELECT m.id, m.picture, m.title, ms."startDate", ms."endDate", string_agg(g.name, ', ') as genre FROM "movie" m
  JOIN "movieSchedule" ms ON ms."movieId" = m.id
  LEFT JOIN "movieGenre" mg ON mg."movieId" = m.id
  LEFT JOIN genre g ON g.id = mg."genreId"
  WHERE CURRENT_DATE BETWEEN ms."startDate" AND ms."endDate"
  GROUP BY m.id, ms.id;`
  db.query(sql, cb)
}

exports.detailMovie = (id, cb) => {
  const sql = `
  SELECT m.id, m.title, m.picture ,string_agg(DISTINCT g.name, ', ') as genres,
    string_agg(DISTINCT c.name, ', ') as casts,
    m.synopsis, m.director, m.duration, m."releaseDate"
    FROM "movie" m
    JOIN "movieGenre" mg ON mg."movieId" = m.id
    JOIN "genre" g ON g.id = mg."genreId"
    JOIN "movieCast" mc ON mc."movieId" = m.id
    JOIN "casts" c ON c.id = mc."castId"
    WHERE m.id = $1
    GROUP BY m.id`;
  const values = [id]
  db.query(sql, values, cb);
};
