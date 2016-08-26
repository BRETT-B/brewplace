brewApp.controller('modalController', function ($scope, $localStorage, $uibModalInstance, params) {
	$scope.storage = $localStorage;
	if (!$scope.storage.faves) $scope.storage.faves = [];

	$scope.options = params.searchTerm;

	$scope.close = function() {
		$uibModalInstance.close();
	};

	$scope.addBeer = function() {
		var index = $scope.storage.faves.indexOf($scope.options);
		if (index === -1) $scope.storage.faves.push($scope.options);
	};

	$scope.removeBeer = function() {
		var index = $scope.storage.faves.indexOf($scope.options);
		if (index > -1) $scope.storage.faves.splice(index, 1);
	};

});