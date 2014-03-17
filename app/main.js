(function()
{
	var app = angular.module('app', 
	[
		'ngRoute',
		'LoginPage'
	]);

	app.config(['$routeProvider', function($routeProvider)
	{
		$routeProvider.when('/login/',
		{
			templateUrl : '/pages/login.html',
			controller : 'LoginPage'
		});

		$routeProvider.otherwise(
		{
			redirectTo : '/login/'
		});
	}]);
})();