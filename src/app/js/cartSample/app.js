angular.module('cartApp', [])
	   .controller('CartController',
		function ($scope, $location) {
			$scope.items = [
				{ title: 'Paint Dots', quantity: 8, price: 3.95 },
				{ title: 'Polka Dots', quantity: 17, price: 12.95 },
				{ title: 'Pebbles', quantity: 5, price: 6.95 }
			];

			$scope.remove = function (index) {
				$scope.items.splice(index, 1);
			}
		});