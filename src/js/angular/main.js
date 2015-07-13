// Declare a new Angular app
var app = angular.module('testApp', []);

app.controller('PostgresController', ['$http', function ($http) {
	PostgresController = this;

	$http.get('/pg')
		.success(function (data) {
			PostgresController.nodes = data;
			console.log('Mr. Wizard succeeded!');
		})
		.error(function (err) {
			console.error('Mr. Wizard could not make a post request to get the nodes.', err);
			PostgresController.nodes = [];
		});
}]);