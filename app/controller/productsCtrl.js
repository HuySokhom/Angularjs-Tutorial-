app.controller(
	'productsCtrl', [
	'$scope'
	, 'Factory'
	, 'Services'
	, '$location'
	, function ($scope, Factory, Services, $location){
		
		function init(){
			Factory.get().success(function(data){
				$scope.products = data;
			});
		};
		// initial function 
		init();
		
		$scope.edit = function( params ){
			Services.set( params );
			$location.path("product/" + params.id);
		};
		
		//@todo ...
		
	}
]);