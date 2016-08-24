brewApp.controller('modalController', function ($scope, $uibModalInstance, params) {

	$scope.options = params.searchTerm;

	$scope.close = function() {
		$uibModalInstance.close();
	};

});