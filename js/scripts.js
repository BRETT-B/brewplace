var brewApp = angular.module('brewApp', ['ui.bootstrap']);

brewApp.controller('brewController', function($scope){

	$scope.breweries = atlBreweries;


});


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

	$scope.breweriesByCity = function(city){
		var cityURL = 'http://api.brewerydb.com/v2/locations?locality='+encodeURI(city)+'&key=b96c391074e29a0289645cf3874e6831';
		console.log(cityURL);
		$http({
			method: 'GET',
			url: cityURL
		}).then(
			function successFunction(cityData){
				console.log(cityData.data);
				$scope.breweries = cityData;
			},function failureFunction(cityData){
				console.log(cityData);
		});
	

};

