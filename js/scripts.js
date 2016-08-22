var brewApp = angular.module('brewApp', []);

brewApp.controller('brewController', function($scope, $http){

	console.log(atlBreweries[0].data);
	$scope.breweries = atlBreweries[0].data;

	console.log(fiveSeasonsBeers[0].data);
	$scope.beers = fiveSeasonsBeers[0].data;

	// need to handle case where a brewery has no beers listed

	// $scope.breweriesByCity = function(city){
	// 	var cityURL = 'http://api.brewerydb.com/v2/locations?key=b96c391074e29a0289645cf3874e6831&locality=' + city;
	// 	console.log(cityURL);
	// 	$http({
	// 		method: 'GET',
	// 		url: cityURL
	// 	}).then(
	// 		function successFunction(cityData){
	// 			$scope.breweries = cityData[0].data;
	// 			console.log($scope.breweries);
	// 		},function failureFunction(cityData){
	// 			console.log(cityData);
	// 	});
	// }

});