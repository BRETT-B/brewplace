brewApp.controller('breweryController', function($scope){
	$scope.breweries = atlBreweries;
});

// 	$scope.breweriesByCity = function(city){
// 		var cityURL = 'http://api.brewerydb.com/v2/locations?locality='+encodeURI(city)+'&key=b96c391074e29a0289645cf3874e6831';
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
	

// };

