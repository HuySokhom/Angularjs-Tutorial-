app.controller(
	'productViewCtrl', [
	'$scope'
	, 'Factory'
	, 'Services'
	, '$location'
	, function ($scope, Factory, Services, $location){
		
		$scope.productDetail = Services.get();
		
		//@todo ...		
		
	}
]);



