brewApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/components/verify/verifyView.html',
		controller: 'verifyController'
	})
	.when('/brew', {
		templateUrl: 'app/components/brewery/breweryView.html',
		controller: 'breweryController'
	})
	.when('/beer101' {
		templateUrl: 'app/components/beer101/beer101.html',
		controller: 'beer101Controller'
	})
	.otherwise({
		redirectTo: '/'
	});
});