// Declare a new Angular app
var app = angular.module('testApp', []);

app.controller('PostgresController', ['$http', function ($http) {
	// Because if you refer to 'this' inside the $http.get it will assume
	// you are referring to that instance of $http.somethingsomething
	PostgresController = this;

	// Make a get request to /pg
	$http.get('/pg')
		.success(function (data) {
			// this.nodes = data
			PostgresController.nodes = data;
			console.log('Nodes successfully retrieved');
		})
		.error(function (err) {
			console.error('Could not get nodes', err);
			// this.nodes = []
			PostgresController.nodes = [];
		});
}]);