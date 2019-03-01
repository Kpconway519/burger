
const mysql = require("mysql");


//setting up connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database: "burger_db"
});


//make the connection to my db
connection.connect(function(err) {
    if (err) { console.error("error connecting to Database: " + err.stack);
    return
};
    console.log("connected as id " + connection.threadId);
})

//exporting connection 
module.exports = connection;







