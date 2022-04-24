const { Pool } = require("pg");

// PGUSER = postgres;
// PGPASSWORD = Dammam_1973;
// PGHOST = localhost;
// PGDATABASE = shortpost;
// PGPORT = 5433;

const pool = new Pool({
  user: "postgres",
  password: "Dammam_1973",
  host: "localhost",
  database: "shortpost",
  port: 5433,
});

module.exports = pool;
