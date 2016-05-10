/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.creatConnection(process.env.JAWSDB_URL);
} else {
    connection= mysql.creatConnection({
        host: 'localhost',
        user: 'root',
        password: 'hacktheplanet',
        database: 'todoagain_db',
    })
}

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
