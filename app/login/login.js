(function()
{
	var LoginPage = angular.module('LoginPage', []);

	LoginPage.controller('LoginPage', ['$scope', '$http', function($scope, $http)
	{
		$('#username').focus();

		$scope.pageTitle = 'Login For Roadside Services Portal';

		$scope.resetErrors = function()
		{
			$scope.error = 
			{
				found : false,
				message : ''
			};
		};

		$scope.resetErrors();

		$scope.validateLogin = function()
		{
			$scope.resetErrors();

			if($scope.username && $scope.password)
			{
				$scope.requestData = 
				{
					username : $scope.username,
					password : $scope.password
				};

				$http(
				{
					url: 'ors/login',
					method: "POST",
					data: $scope.requestData
				}).success(function (data, status, headers, config) 
				{
					console.log('success');
					console.log(data);
					console.log(status);
				}).error(function (data, status, headers, config) 
				{
					console.log('error');
					console.log(data);
					console.log(status);
				});
			}
			else
			{
				$scope.error = 
				{
					found : true,
					message : 'Username and password required.'
				};
			}
		};

		$scope.help = function()
		{
			$scope.resetErrors();
			$('#modal-need-help').modal('show');
		};
	}]);
})();