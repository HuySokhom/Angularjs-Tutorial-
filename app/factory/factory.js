app.factory("Factory", [
 	'$http', 
 	function ($http) {
        var url = 'data/products.php';
        var obj = {};
        
        obj.get = function(params) {
        	console.log(params);
            return $http({
        		url: url,
    			method: 'GET',
    			params: params
            });
        };        
        
        obj.getFilter = function(params) {
        	console.log(params);
            return $http({
        		url: 'data/product_filter.php',
    			method: 'GET',
    			params: params
            });
        };        
        
        obj.save = function(params) {
        	console.log(params);
            return $http({
        		url: 'data/product_update.php',
    			method: 'GET',
    			params: params
            });
        };        
        
        obj.remove = function(params) {
            return $http({
        		url: 'data/product_delete.php',
    			method: 'GET',
    			params: params
            });
        };        
        
        return obj;
        
 	}
]);
