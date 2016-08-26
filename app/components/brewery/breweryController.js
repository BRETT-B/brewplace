brewApp.controller('breweryController', function($scope, $location, $interval, $uibModal, modalFactory, $localStorage) {
	// check for localStorage variable
	$scope.storage = $localStorage;
	if (!$scope.storage.verified) $location.path('/');
	
	$scope.breweries = atlBreweries;

	$scope.chooseBrewery = function(index) {
		switch(index) {
			case 0:
				$scope.beers = oDempseysBeers;
				$scope.chosenBrewery = atlBreweries[0].name;
				break;
			case 1:
				$scope.beers = redBrickBeers;
				$scope.chosenBrewery = atlBreweries[1].name;
				break;
			case 2:
				$scope.beers = pontoonBeers;
				$scope.chosenBrewery = atlBreweries[2].name;
				break;
			case 3: 
				$scope.beers = maxLagersBeers;
				$scope.chosenBrewery = atlBreweries[3].name;
				break;
			case 4:
				$scope.beers = mondayNightBeers;
				$scope.chosenBrewery = atlBreweries[4].name;
				break;
			case 5:
				$scope.beers = parkTavernBeers;
				$scope.chosenBrewery = atlBreweries[5].name;
				break;
			case 6:
				$scope.beers = sweetWaterBeers;
				$scope.chosenBrewery = atlBreweries[6].name;
				break;
			case 7:
				$scope.beers = orpheusBeers;
				$scope.chosenBrewery = atlBreweries[7].name;
				break;
			case 8:
				$scope.beers = secondSelfBeers;
				$scope.chosenBrewery = atlBreweries[8].name;
				break;
			case 9:
				$scope.beers = eventideBeers;
				$scope.chosenBrewery = atlBreweries[9].name;
				break;
			case 10:
				$scope.beers = wreckingBarBeers;
				$scope.chosenBrewery = atlBreweries[10].name;
				break;
			case 11:
				$scope.beers = fiveSeasonsBeers;
				$scope.chosenBrewery = atlBreweries[11].name;
				break;
			default:
				$scope.beers = "Invalid route.";
		}
	};

	$scope.openModal = function(type, index) {
		// type is an array of either all beers or only the favorite beers
		// so type will either by equal to $scope.beers or $scope.faves
		// index is the index of the beer that was clicked on (equal to $index)
		modalFactory.open({ searchTerm: type[index] });
	};

});