brewApp.controller('beer101Controller', function($scope, $location, $localStorage){
	$scope.storage = $localStorage;
	if (!$scope.storage.verified) $location.path('/');
	
	$scope.definitions = definitions;
	$scope.ales = ales;
	$scope.lagers = lagers;
});