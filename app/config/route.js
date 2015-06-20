app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/product/:id', {
				templateUrl: 'app/partials/product-detail.html',
                controller: 'productViewCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
]);