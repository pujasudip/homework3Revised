var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


var refresh = function(){
	 $http.get('/hw3').success(function(response){
	 	console.log("I got the data I requested.");
	 	$scope.hw3 = response;
	 	$scope.data = "";
	 });
 };
 var refresh2 = function(){
	 $http.get('/hw32').success(function(response){
	 	console.log("I got the data I requested.");
	 	$scope.hw32 = response;
	 	$scope.data2 = "";
	 });
 };
 refresh();
 refresh2();

 $scope.addData = function(){
 	console.log($scope.data);
 	$http.post('/hw3', $scope.data).success(function(response){
 		console.log(response);
 		refresh();
 	});
 };
$scope.addData2 = function(){
 	console.log($scope.data2);
 	$http.post('/hw32', $scope.data2).success(function(response){
 		console.log(response);
 		refresh2();
 	});
 };

 $scope.remove = function(id){
 	console.log(id);
 	$http.delete('/hw3/' + id).success(function(response){
 		refresh();
 	});
 };
 $scope.remove2 = function(id){
 	console.log(id);
 	$http.delete('/hw32/' + id).success(function(response){
 		refresh2();
 	});
 };

$scope.edit = function(id){
	console.log(id);
	$http.get('/hw3/' + id).success(function(response){
		$scope.data = response;
	});
};
$scope.edit2 = function(id){
	console.log(id);
	$http.get('/hw32/' + id).success(function(response){
		$scope.data2 = response;
	});
};

$scope.update = function(){
	console.log($scope.data._id);
	$http.put('/hw3/' + $scope.data._id, $scope.data).success(function(response){
		refresh();
	});
};
$scope.update2 = function(){
	console.log($scope.data2._id);
	$http.put('/hw32/' + $scope.data2._id, $scope.data2).success(function(response){
		refresh2();
	});
};

$scope.deselect = function(){
	$scope.data = "";
}

$scope.deselect2 = function(){
	$scope.data2 = "";
}

}]);
