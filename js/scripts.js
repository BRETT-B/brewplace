// var brewApp = angular.module('brewApp', []);

// brewApp.controller('brewController', function($scope, $http){

// 	$scope.breweries = [];

// 	$scope.breweriesByCity = function(city){
// 		var cityURL = 'http://api.brewerydb.com/v2/locations?key=b96c391074e29a0289645cf3874e6831&locality=' + city;
// 		console.log(cityURL);
// 		$http({
// 			method: 'GET',
// 			url: cityURL
// 		}).then(
// 			function successFunction(cityData){
// 				console.log(cityData.data);
// 				$scope.breweries = cityData;
// 			},function failureFunction(cityData){
// 				console.log(cityData);
// 		});
// 	}

// });