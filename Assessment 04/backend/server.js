
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sivajothi",
  database: "grocery"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected To Mysql");
  var sql = "INSERT INTO apply1 (Email, Password)('sivajothi@gmail.com',12345678);"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("one row inserted");
  });
});

