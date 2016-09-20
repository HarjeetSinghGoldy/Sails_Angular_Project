


sample.directive('draggable', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element[0].addEventListener('dragstart', scope.handleDragStart, false);
      element[0].addEventListener('dragend', scope.handleDragEnd, false);
    }
  }
});

sample.directive('droppable', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element[0].addEventListener('drop', scope.handleDrop, false);
      element[0].addEventListener('dragover', scope.handleDragOver, false);
    }
  }
});
sample.controller('ePrescriptionController',function (){

});
sample.controller('MedController',function ($scope)
{
  $scope.drag_types = [
    {name: "Glador"},
    {name: "Crosin"},
    {name: "Combiflame"},
    {name:"Mascart"},
    {name:"Disprin"}
  ];



  $scope.items = [];

  $scope.handleDragStart = function(e){
    this.style.opacity = '0.4';
    e.dataTransfer.setData('text/plain', this.innerHTML);
  };

  $scope.handleDragEnd = function(e){
    this.style.opacity = '1.0';
  };

  $scope.handleDrop = function(e){
    e.preventDefault();
    e.stopPropagation();
    var dataText = e.dataTransfer.getData('text/plain');
    $scope.items.push(dataText);
    console.log($scope.items);
    $scope.$digest();
  };

  $scope.handleDragOver = function (e) {
    e.preventDefault(); // Necessary. Allows us to drop.
    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
    return false;
  };





});

sample.controller('freqController',function ($scope)
{
  $scope.freqs = [
    {name1: "1-1-1"},
    {name1: "0-0-0"},
    {name1: "0-0-1"},
    {name1:"1-1-0"},
    {name1:"1-0-1"}
  ];
  $scope.items = [];

  $scope.handleDragStart = function(e){
    this.style.opacity = '0.4';
    e.dataTransfer.setData('text/plain', this.innerHTML);
  };

  $scope.handleDragEnd = function(e){
    this.style.opacity = '1.0';
  };

  $scope.handleDrop = function(e){
    e.preventDefault();
    e.stopPropagation();
    var dataText = e.dataTransfer.getData('text/plain');
    $scope.items.push(dataText);
    console.log($scope.items);
    $scope.$digest();
  };

  $scope.handleDragOver = function (e) {
    e.preventDefault(); // Necessary. Allows us to drop.
    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
    return false;
  };



});

sample.controller('daysController',function ($scope)
{
  $scope.days = [
    {name: "Day1"},
    {name: "Day2"},
    {name: "Day3"},
    {name:"Day4"},
    {name:"Day5"}
  ];
  $scope.items = [];

  $scope.handleDragStart = function(e){
    this.style.opacity = '0.4';
    e.dataTransfer.setData('text/plain', this.innerHTML);
  };

  $scope.handleDragEnd = function(e){
    this.style.opacity = '1.0';
  };

  $scope.handleDrop = function(e){
    e.preventDefault();
    e.stopPropagation();
    var dataText = e.dataTransfer.getData('text/plain');
    $scope.items.push(dataText);
    console.log($scope.items);
    $scope.$digest();
  };

  $scope.handleDragOver = function (e) {
    e.preventDefault(); // Necessary. Allows us to drop.
    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
    return false;
  };



});


sample.controller('DashboardController',function($scope){
	$scope.message ='Page is underconstruction sorry for inconvenience...';
});

sample.controller('emr', ['$scope', '$state', function($scope, $state) {
   $scope.$state = $state;
}]);

sample.directive('fileModel', ['$parse', function ($parse) {
            return {
               restrict: 'A',
               link: function(scope, element, attrs) {
                  var model = $parse(attrs.fileModel);
                  var modelSetter = model.assign;
                  
                  element.bind('change', function(){
                     scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                     });
                  });
               }
            };
         }]);
      
         sample.service('fileUpload', ['$http', function ($http) {
            this.uploadFileToUrl = function(file, uploadUrl){
               var fd = new FormData();
               fd.append('file', file);
            
               $http.post(uploadUrl, fd, {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
               })
            
               .success(function(){
               })
            
               .error(function(){
               });
            }
         }]);
      
         sample.controller('myCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
            $scope.uploadFile = function(){
               var file = $scope.myFile;
               
               console.log('file is ' );
               console.dir(file);
               
               var uploadUrl = "/fileUpload";
               fileUpload.uploadFileToUrl(file, uploadUrl);
            };
         }]);