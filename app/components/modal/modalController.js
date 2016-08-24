brewApp.controller('modalController', function ($scope, $uibModalInstance, params) {

	$scope.options = params.searchTerm;

    // $scope.imgLoadedEvents = {
    //     fail: function(instance) {
    //         console.log("failed: " + instance);
    //     }
    // };

	$scope.close = function() {
		$uibModalInstance.close();
	};

	$scope.addBeer = function() {
		faves.push($scope.options);
		$scope.faves = faves;
	}

	$scope.removeBeer = function() {
		var index = faves.indexOf($scope.options);
		faves.splice(index, 1);
		$scope.faves = faves;
	}

});