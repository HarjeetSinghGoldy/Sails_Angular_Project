
sample.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

sample.controller('toolCtrl', function($scope, $filter, $http) {
  $scope.users = [
    {id: 1, name: 'Equipment1', model:'g34',brand: 'C32', quantity: 4,desc: 'Add description!'},
    {id: 2, name: 'Equipment2', model:'g35',brand: 'undefined', quantity: 3,desc: 'Add description!'},
    {id: 3, name: 'Equipment3', model:'g36',brand: 2, quantity: 6,desc: 'Add description!'}
  ];

  $scope.checkName = function(data, id) {
    if (id === 2 && data === '') {
      return "Username 2 should be `filled`";
    }
  };

  $scope.saveUser = function(data, id) {
    //$scope.user not updated yet
    angular.extend(data, {id: id});
    return $http.post('/saveUser', data);
  };

  // remove user
  $scope.removeUser = function(index) {
    $scope.users.splice(index, 1);
  };

  // add user
  $scope.addUser = function() {
    $scope.inserted = {
      id: $scope.users.length+1,
      name: '',
      model:'',
      status: null,
      group: null
    };
    $scope.users.push($scope.inserted);
  };
});
