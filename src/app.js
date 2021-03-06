// Import Libraries
var express = require('express');
var path = require('path');
var pg = require('pg');

// Create app using express.js
var app = express();

// Postgres constring
var pgCon = process.env.DATABASE_URL || process.argv[2];

// SSL is needed when connecting to a heroku database
pg.defaults.ssl = true;

// Home route
app.get('/', function (req, res) {
    // Sends a static file to the server. Prepends the dir this file comes from
    console.log('Serving file from: %s', path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Trying to use postgres
app.get('/pg', function (req, res) {
    console.log('Connecting to database');

    // Connect to the database, using the con string
    pg.connect(pgCon, function (err, client, done) {
	if (err) {
	    return console.error('Couldn\'t connect to database', err);
	}

	console.log('Connection established, performing query');

	// Exec query
	client.query('select * from Entry', function (err, result) {
	    if (err) {
		return console.error('Could not perform query', err);
	    };

	    console.log('Query completed successfully');

	    // Send a response
	    res.send(result.rows);
	});
    });
});

// Express middleware?
app.use(express.static('src'));

// Get the port from an evironment variable
var port = process.env.PORT || process.argv[3];

// Set up server on port os.environ.PORT
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening on http://%s:%s', host, port);
});
