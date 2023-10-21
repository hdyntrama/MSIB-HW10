const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgres://postgres:1234567@localhost:5432/dbmovies",
});

module.exports = pool;
