brewApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'verifyView.html',
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