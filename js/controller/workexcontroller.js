angular.module('mywebsite')
.controller('workexCtrl',function($scope){
	var exp1 = {
		'company' : 'Samsung Electronics America'
	}

	var exp2 = {
		'company' : 'Accenture Services Pvt Limited'
	}

	$scope.experiences = [exp1,exp2];
})