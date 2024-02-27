// config/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,            // Your MySQL server port (default is 3306)
  user: 'root',          // Your root username
  password: 'root',      // Your root password
  database: 'test',
});

module.exports = connection;