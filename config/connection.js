// Set up MySQL connection.
var mysql = require("mysql");
var connection = mysql.createConnection({
  port: 3306,
  host: "sql3.freemysqlhosting.net",
  user: "sql3197838",
  password: "1KCPXjGsxd",
  database: "sql3197838"
});
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Export connection for our ORM to use.
module.exports = connection;