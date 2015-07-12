// Import libraries
var express = require('express');

// Create app using express.js
var app = express();

// Home route
app.route('/', function (req, res) {
	res.send('Testing 123');
});
