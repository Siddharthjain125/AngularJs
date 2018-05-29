/// <reference path = "https://ajax.googleapis.com/ajax/libs/angularjs/1.6.10/angular.js" />


myApp.controller("homeController" , function($scope, $http){
					$http.get('http://127.0.0.1:5000/api?limit=30&offset=20')
					 .then(function(response){
					 	$scope.photos = response.data;
					 });

				})