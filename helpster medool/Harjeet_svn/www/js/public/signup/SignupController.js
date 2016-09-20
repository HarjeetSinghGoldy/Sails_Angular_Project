angular.module('SignupModule').controller('SignupController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){

	// set-up loading state
	$scope.signupForm = {
		loading: false
	}

	$scope.submitSignupForm = function(){

		// Set the loading state (i.e. show loading spinner)
		$scope.signupForm.loading = true;

		// Submit request to Sails.
		$http.post('/signup', {
			firstname: $scope.signupForm.firstname,
			lastname: $scope.signupForm.lastname,
			mobile: $scope.signupForm.mobile,
			title: $scope.signupForm.title ,
			gender: $scope.signupForm.gender,
			
			email: $scope.signupForm.email,
			password: $scope.signupForm.password
		})
		.then(function onSuccess(sailsResponse){
			window.location = '/';
		})
		.catch(function onError(sailsResponse){

		// Handle known error type(s).
		// If using sails-disk adpater -- Handle Duplicate Key
		var emailAddressAlreadyInUse = sailsResponse.status == 409;

		if (emailAddressAlreadyInUse) {
			toastr.error('That email address has already been taken, please try again.', 'Error');
			return;
		}

		})
		.finally(function eitherWay(){
			$scope.signupForm.loading = false;
		})
	};
	
	

	
 $scope.date = {};

 $scope.days = [];
 for (var i = 1; i <= 31; i++) { $scope.days.push(i); }

 $scope.months = [];
 for (var i = 1; i <= 12; i++) { $scope.months.push(i); }

 $scope.years = [];
 for (var i = 1980; i <= (new Date().getFullYear()); i++) {
 $scope.years.push(i);
 }


 


	
	$scope.submitLoginForm = function (){

    // Set the loading state (i.e. show loading spinner)
    $scope.loginForm.loading = true;

    // Submit request to Sails.
    $http.put('/login', {
      email: $scope.loginForm.email,
      password: $scope.loginForm.password
    })
    .then(function onSuccess (){
      // Refresh the page now that we've been logged in.
      window.location = '/';
    })
    .catch(function onError(sailsResponse) {

      // Handle known error type(s).
      // Invalid username / password combination.
      if (sailsResponse.status === 400 || 404) {
        // $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';
        //
        toastr.error('Invalid email/password combination.', 'Error', {
          closeButton: true
        });
        return;
      }

				toastr.error('An unexpected error occurred, please try again.', 'Error', {
					closeButton: true
				});
				return;

    })
    .finally(function eitherWay(){
      $scope.loginForm.loading = false;
    });
  };






}]);

