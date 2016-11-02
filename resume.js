var app = angular.module('myapp',[]);
app.controller('myctrl',function($scope){
	$scope.name = name;
	$scope.greetings='Hey';
	$scope.greeting = function(){
		
		if($scope.name.length > 4){
			$scope.greetings = "Good Day";

		}
		else{
			$scope.greetings = "Good Night";
		}
		return $scope.greetings;
	
	}
})