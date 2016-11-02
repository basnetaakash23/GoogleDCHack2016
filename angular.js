var app = angular.module('myapp',[]);
app.config(function($routeProvider){
	$routeProvider
	.when("/")
})
app.controller('myctrl',function($scope){
	$scope.name = name;
	$scope.greetings='';
	$scope.warning='';
	$scope.greeting = function(){
		
		if($scope.name.length > 4){
			$scope.greetings ="Hi, "+ $scope.name + " Good Day";

		}
		else{
			 $scope.greetings ="Hi, "+ $scope.name + " Good Night";
		}
		return $scope.greetings;
	
	};

	
});

app.directive('validateEmail', function() {
  var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

  return {
    require: 'ngModel',
    restrict: '',
    link: function(scope, elm, attrs, ctrl) {
      // only apply the validator if ngModel is present and Angular has added the email validator
      if (ctrl && ctrl.$validators.email) {

        // this will overwrite the default Angular email validator
        ctrl.$validators.email = function(modelValue) {
          return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
        };
      }
    }
  };
});

app.controller(['myctrl1','myService',function($scope){
	$scope.education='';
	$scope.list = [];
	$scope.records = function(){
		$scope.list = $scope.strings.split(",");
		console.log($scope.list);
	};

	$scope.showRecords =function(){
				
				console.log($scope.education);
			};
	myService.set();
}]);

app.controller(['myctrl2','myService',function($scope){

}]);

app.controller('myctrl3','myService',function($scope){

});

app.controller(['myctrl4','myService',function($scope){
	$scope.redirectToDraftPage=function(){
		$location.path('/');
	};
	$scope.desiredLocation = myService.get();

}]);

app.directive('textarea',function(){
	return{
		restrict: 'E',
		link: function(scope, element, attrs){
			
			
		}
	}
});

