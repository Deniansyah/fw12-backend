const { Pool } = require("pg");

const db = new Pool({
  // connectionString: "postgresql://postgres:1@localhost:5432/gotickz"
  connectionString:
    "postgresql://postgres:U9UR2N8vIbVSVHwc@db.aiiiynkhitpxwcitdagk.supabase.co:5432/postgres",
});

// db.connect((err) => {
//   if (err) {
//     console.log("database is NOT connect");
//   } else {
//     console.log("connection database is succesfully");
//   }
// });

module.exports = db;
