brewApp.controller('breweryController', function($scope, $modalService){
	$scope.breweries = atlBreweries;
	$scope.fiveSeasonsBeers = fiveSeasonsBeers;
	$scope.maxLagersBeers = maxLagersBeers;
	$scope.mondayNightBeers = mondayNightBeers;
	$scope.oDempseysBeers = oDempseysBeers;
	$scope.orpheusBeers = orpheusBeers;
	$scope.parkTavernBeers = parkTavernBeers;
	$scope.pontoonBeers = pontoonBeers;
	$scope.redBrickBeers = redBrickBeers;
	$scope.secondSelfBeers = secondSelfBeers;
	$scope.sweetWaterBeers = sweetWaterBeers;
	$scope.wreckingBarBeers = wreckingBarBeers;
	$scope.eventideBeers = eventideBeers;

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

