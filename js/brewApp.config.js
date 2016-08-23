brewApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'verify.html',
		controller: 'verifyController'
	})
	.when('/menu', {
		templateUrl: 'menuView.html',
		controller: 'menuController'
	})
	.otherwise({
		redirectTo: '/'
	});
});