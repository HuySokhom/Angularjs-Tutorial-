app.service("Services", [
    '$http'
 	, function($http) {
        
 		var obj = {};
 		return {
 	        get: function(params){
 	            return obj;
 	        },
 	        set: function(params){
 	        	obj = params;
 	        }
 		};
 			
 	}
]);
