/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


sample.controller('userProfileController',function($scope,$http,$log){
  //Store empnum in Controller
	// $scope.email = $routeParams.email;
	//Initialist the employee Data
	$scope.user = {};
	//Initialise Error Handler
	$scope.notFound = false;
	//Do an API Call to findEmployeebyEmpnum with $routeParams.profileid
	  $http.get("http://localhost:1337/page/userProfile")

		 .success(function(data){
		 	//On successful API CALL check whether empty data is returned or not
		 	if(data.notFound === true)
		 	{
		 		//If employee not Found set error flag -- ng-show manages the rest 
		 		$scope.notFound = true;
		 		return;
		 	}
		 	//if employee found copy employee Data
		 	$scope.user = data.userData;
		 	//Log the data
		 	$log.info(data);
		 })
		 .error(function(data){
		 	//Log error Data
		 	$log.info(data);
		 });
});

