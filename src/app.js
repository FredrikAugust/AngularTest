// Import libraries
var express = require('express');

// Create app using express.js
var app = express();

// Home route
app.get('/', function (req, res) {
	res.render('src/index.html');
});

// Set up server on port 3000
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening on http://%s:%s', host, port);
});