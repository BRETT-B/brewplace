brewApp.controller('breweryController', function($scope, $uibModal, modalFactory, $routeParams){
	var index = $routeParams.option;
	console.log(index);
	switch(index) {
		case '0':
			$scope.beers = oDempseysBeers;
			break;
		case '1':
			$scope.beers = redBrickBeers;
			break;
		case '2':
			$scope.beers = pontoonBeers;
			break;
		case '3': 
			$scoe.beers = maxLagersBeers;
			break;
		case '4':
			$scope.beers = mondayNightBeers;
			break;
		case '5':
			$scope.beers = parkTavernBeers;
			break;
		case '6':
			$scope.beers = sweetWaterBeers;
			break;
		case '7':
			$scope.beers = orpheusBeers;
			break;
		case '8':
			$scope.beers = secondSelfBeers;
			break;
		case '9':
			$scope.beers = wreckingBarBeers;
			break;
		case '10':
			$scope.beers = fiveSeasonsBeers;
			break;
		default:
			$scope.beers = "Invalid route."
	}

	console.dir($scope.beers);

	$scope.open = function(index) {
		modalFactory.open({ searchTerm: $scope.beers[index] });
	};
});