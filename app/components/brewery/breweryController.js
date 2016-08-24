brewApp.controller('breweryController', function($scope, $interval, $uibModal, modalFactory){
	$scope.breweries = atlBreweries;

	$interval(function(){
		$scope.faves = faves;
	}, 1000);

	$scope.chooseBrewery = function(index) {
		//console.log(index)
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
				$scope.beers = wreckingBarBeers;
				$scope.chosenBrewery = atlBreweries[9].name;
				break;
			case 10:
				$scope.beers = eventideBeers;
				$scope.chosenBrewery = atlBreweries[10].name;
				break;
			case 11:
				$scope.beers = fiveSeasonsBeers;
				$scope.chosenBrewery = atlBreweries[11].name;
				break;
			default:
				$scope.beers = "Invalid route."
		}
		//console.dir($scope.beers);
	}

	$scope.openModal = function(index) {
		modalFactory.open({ searchTerm: $scope.beers[index] });
	};
});