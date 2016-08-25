brewApp.controller('modalController', function ($scope, $uibModalInstance, params) {

	$scope.options = params.searchTerm;

	$scope.close = function() {
		$uibModalInstance.close();
	};

	$scope.addBeer = function() {
		var index = faves.indexOf($scope.options);
		if (index === -1) {
			faves.push($scope.options);
		}
	};

	$scope.removeBeer = function() {
		var index = faves.indexOf($scope.options);
		if (index > -1) {
			faves.splice(index, 1);
		}
	};

});