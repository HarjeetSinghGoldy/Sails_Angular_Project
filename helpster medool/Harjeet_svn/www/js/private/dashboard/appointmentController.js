//
//

sample.controller("appointmentController", function($scope) {
$scope.apts = [
                    { 'id': 2145697,
                      'firstname': 'Rajiv',
                      'lastname': 'Singh',
                      'age': 32,
                      'mobile': 9874563210,
                      'doc': 'Dr. Vijay Kumar',
                      'email': 'rajiv@mail.com',
                      'fee': 500
                  },
                    { 'id': 2145697,
                      'firstname': 'Neha',
                      'lastname': 'Singh',
                      'age': 32,
                      'mobile': 9874563210,
                      'doc': 'Dr. Suman Verma',
                      'email': 'neha@gmail.com',
                      'fee': 500
                  },    
                    ];
$scope.addRow = function(){		
	$scope.apts.push({ 'id':$scope.id, 'firstname': $scope.firstname, 'lastname':$scope.lastname,
                                  'age': $scope.age, 'mobile': $scope.mobile, 'doc': $scope.doc, 'email': $scope.email,
                                    'fee': $scope.fee});
	$scope.id='';
	$scope.firstname='';
	$scope.lastname='';
        $scope.age='';
	$scope.mobile='';
	$scope.doc='';
        $scope.email='';
        $scope.fee='';
};

//date picker
$scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };

  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
});