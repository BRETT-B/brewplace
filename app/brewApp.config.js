brewApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/components/verify/verifyView.html',
		controller: 'verifyController'
	})
	.when('/brew', {
		templateUrl: 'app/components/brewery/breweryView.html',
		controller: 'breweryController'
	})
	.otherwise({
		redirectTo: '/'
	});
});