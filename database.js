var mysql=require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "punam",
  password: "punam"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/*
con.query("CREATE DATABASE bookmyticket", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
*/