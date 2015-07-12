// Import libraries
var express = require('express');
var path = require('path');

// Create app using express.js
var app = express();

// Home route
app.get('/', function (req, res) {
	// Sends a static file to the server. Prepends the dir this file comes from
	console.log('Serving file from: %s', path.join(__dirname + '/index.html'));
	res.sendFile(path.join(__dirname + '/index.html'));
});

// Set up server on port 3000
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening on http://%s:%s', host, port);
});