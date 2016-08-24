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

});