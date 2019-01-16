//ORM talks to mysql, just remember that. 

const connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
var arr = [];

// loop through the keys and push the key/value as a string int arr
for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
    if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
    }
    arr.push(key + "=" + value);
    }
}

// translate array of strings to a single comma-separated string
return arr.toString();
}









//this is my orm for the burger
var orm = {
	// This function gets all the burgers out of the db
	allBurgers: function(table, cb) {
		connection.query("SELECT * FROM " + table + ";", function(err, result) {
			if (err) {
				return err;
			}
			cb(result);
		});
	},

	// Function to add a burger to the db
	addBurger: function(cols, vals, cb) {
		// Construct the query string that inserts a single row into the target table
		var querystring = `INSERT INTO burgers (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`
		console.log(querystring)
		connection.query(querystring, vals, function(err, result) {
			if (err) {
				throw err;
			}
			// Return results in callback
			cb(result);
		});
	},

	// this function updates a burger
	updateBurger: function(tf, condition, cb) {
		connection.query(`UPDATE burgers SET devoured = '${tf}' WHERE ${condition};`, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
}





module.exports = orm;








