app.controller(
	'productViewCtrl', [
	'$scope'
	, 'Factory'
	, 'Services'
	, '$location'
	, '$routeParams'
	, function ($scope, Factory, Services, $location, $routeParams){
		
		function initEdit(){
			var id = $routeParams.id;
			Factory.getFilter({id: id}).success(function(data){
				$scope.productDetail = data;
			});
		};
		// initial function 
		initEdit();
		
		$scope.save = function(){
			Factory.save($scope.productDetail).success(function(data){
				$location.path('/');
			});
		};
		
		$scope.remove = function(){
			Factory.remove($scope.productDetail).success(function(data){
				console.log(data);
				$location.path('/');
			});
		};
		
	}
]);



