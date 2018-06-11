var mysql= require('mysql')
            
var con = mysql.createConnection({
    host: "localhost",
    user:"Admin",
    password:"2yq8ag9fa7hl5bk"
    });
con.connect(function(err)) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
        });
    });
