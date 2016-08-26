
brewApp.controller('modalController', function ($scope, $localStorage, $uibModalInstance, params) {
	// save favorite beer to local storage using $localStorage service
	$scope.storage = $localStorage;
	if (!$scope.storage.faves) $scope.storage.faves = [];
	// gets the beer data from the parameters of the open method
	$scope.options = params.searchTerm;
	// close modal function using $uibModalInstance service
	$scope.close = function() {
		$uibModalInstance.close();
	};
	// add beer to favorites function
	$scope.addBeer = function() {
		var index = $scope.storage.faves.indexOf($scope.options);
		if (index === -1) $scope.storage.faves.push($scope.options);
	};
	// remove beer from favorites function
	$scope.removeBeer = function() {
		var index = $scope.storage.faves.indexOf($scope.options);
		if (index > -1) $scope.storage.faves.splice(index, 1);
	};

});