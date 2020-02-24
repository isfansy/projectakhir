const mysql = require("mysql");

const mysqldb = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "projectakhir",
  port: "3306"
});

module.exports = mysqldb;
