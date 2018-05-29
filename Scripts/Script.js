/// <reference path = "https://ajax.googleapis.com/ajax/libs/angularjs/1.6.10/angular.js" />
/// <reference path = "https://ajax.googleapis.com/ajax/libs/angularjs/1.6.10/angular-route.js" />

var myApp = angular
				.module("myModule", ['ngRoute'])
				.config(function($routeProvider){
					$routeProvider.when('/home',{ templateUrl : 'templates/home.html' , controller : 'homeController'});
					$routeProvider.when('/add',{ templateUrl : 'templates/add.html' , controller : 'addController'});
	
					$routeProvider.otherwise({redirectTo :'/home'});
				})
				
				.filter('startFrom', function(){
					return function(data, start){
						if (!data || !data.length) { return; }
						start = +start;
						return data.slice(start)
					}
				})

