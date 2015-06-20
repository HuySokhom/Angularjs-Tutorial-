app.factory("Factory", [
 	'$http', 
 	function ($http) {
        var url = 'app/data.json';
        var obj = {};
        
        obj.get = function() {
            return $http({
        		url: url,
    			method: 'GET',
            });
        };        
        return obj;
        
 	}
]);
