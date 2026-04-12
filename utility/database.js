const mysql = require("mysql2/promise");

const database = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "data",
});

module.exports = database;