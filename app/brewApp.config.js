brewApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/components/verify/verifyView.html',
		controller: 'verifyController'
	})
	.when('/menu', {
		templateUrl: 'app/components/menu/menuView.html',
		controller: 'menuController'
	})
	.when('/brew/:option', {
		templateUrl: 'app/components/brewery/breweryView.html',
		controller: 'breweryController'
	})
	.otherwise({
		redirectTo: '/'
	});
});