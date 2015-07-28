app.controller(
	'productsCtrl', [
	'$scope'
	, 'Factory'
	, 'Services'
	, '$location'
	, function ($scope, Factory, Services, $location){
		
		$scope.init = function(){
			Factory.get().success(function(data){
				$scope.products = data;
				console.log(data);
			});
		};
		// initial function 
		$scope.init();
		
		$scope.edit = function( params ){
			Services.set( params );
			$location.path("product/" + params.id);
		};
		
		//@todo ...
		
	}
]);