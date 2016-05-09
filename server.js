var connection = require('./config/connection.js');
var orm = require('./config/orm.js');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//root get route
app.get('/', function(req,res) {

    connection.query('SELECT * FROM burgers;', function(err, data) {
      if (err) throw err;

      //test it
      //console.log('The solution is: ', data);

      //test it
      //res.send(data);

      res.render('index', {burgers : data});
    });
});



//post route -> back to home
app.post('/create', function(req, res) {

    connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?)', [req.body.burger_name] [req.body.devoured], function(err, result) {
      if (err) throw err;

      res.redirect('/');
    });


});


var port = 3000;
app.listen(port);
