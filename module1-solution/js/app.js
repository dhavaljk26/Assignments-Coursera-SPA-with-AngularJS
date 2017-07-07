(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){


	$scope.display = "Hello";

	$scope.check = function(){

		var stringToBeChecked = $scope.entry;

		//console.log(stringToBeChecked);
		if(stringToBeChecked === "" || stringToBeChecked == undefined)
			$scope.display = "Please enter data first";
		else
		{	
		var elements = stringToBeChecked.split(',').length;

		if(elements <= 3)
			$scope.display = "Enjoy!";
		else
			$scope.display = "Too much!";
		}				
	}
}

}
)();