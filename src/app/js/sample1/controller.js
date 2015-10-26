angular.module('helloWorldApp', [])
	.controller('HelloCtrl',
		function GreetingController($scope) {
			$scope.greeting = { text: 'Hello' };
		});