const {Pool} = require('pg')

const db = new Pool({
  connectionString: "postgresql://postgres:1@localhost:5432/goticks"
})

// db.connect((err) => {
//   if (err) {
//     console.log("database is NOT connect");
//   } else {
//     console.log("connection database is succesfully");
//   }
// });

module.exports = db
