/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
sample.controller('personalDetailsController', function($scope, $log, $http, $routeParams){
    
    $scope.user ={};
    
    $scope.notFound = false;
    
    $http.get('http://localhost:1337/page/userProfile/')
            .success(function(data){
              if(data.notFound === true)
                {
                    $scope.notFound = true;
                    return;
                }
                $scope.user = data.userData;
                $log.info(data);
            })
            .error(function(data){
                $log.info(data);
            });
    
});

