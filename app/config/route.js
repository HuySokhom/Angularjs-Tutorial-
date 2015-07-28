app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/product/:id', {
				templateUrl: 'app/partials/product-detail.html',
                controller: 'productViewCtrl'
			})
			.when('/', {
				templateUrl: 'app/partials/index.html',
                controller: 'productsCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
]);