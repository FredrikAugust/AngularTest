// Declare a new Angular app
var app = angular.module('testApp', []);

app.controller('PostgresController', ['$http', function ($http) {
	this.nodes = [];
}]);