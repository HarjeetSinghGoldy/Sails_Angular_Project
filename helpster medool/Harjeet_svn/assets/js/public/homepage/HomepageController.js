angular.module('HomepageModule').controller('HomepageController', ['$scope', '$http', '$window', 'toastr', function ($scope, $http, $window, toastr) {

        // set-up loginForm loading state
        $scope.loginForm = {
            loading: false
        };

        $scope.submitLoginForm = function () {

            // Set the loading state (i.e. show loading spinner)
            $scope.loginForm.loading = true;

            // Submit request to Sails.
            $http.put('/login', {
                email: $scope.loginForm.email,
                password: $scope.loginForm.password
            })
                    .then(function onSuccess() {
                        // Refresh the page now that we've been logged in.
                        window.location = '/';  //this function take http from current page to nextpage
                    })
                    .catch(function onError(sailsResponse) {

                        // Handle known error type(s).
                        // Invalid username / password combination.
                        if (sailsResponse.status === 400 || 404) {
                            // $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';

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
                    .finally(function eitherWay() {
                        $scope.loginForm.loading = false;
                    });
        };

        //list of doctors
        $scope.doctors = ["Dentist", "Otology", " Cardiology", "Ophthalmology", "Radiology"];

        //onclick on doctor,pharmacy & lab button will be triggred from this function
        $scope.myclick = function () {
            if ($scope.showPharmacy == $scope.showPharmacy) {
                $scope.showPharmacy = false;
                $scope.showLab = false;
            }
            ;
            $scope.showDoctor = true;   //doctor icon will be displayed
        };
        $scope.myClick1 = function () {
            if ($scope.showDoctor == $scope.showDoctor) {
                $scope.showDoctor = false;
                $scope.showPharmacy = false;
            }
            ;
            $scope.showLab = true;  //lab icon will be displayed
        };
        $scope.myClick2 = function () {
            if ($scope.showLab == $scope.showLab) {
                $scope.showDoctor = false;
                $scope.showLab = false;
            }
            ;
            $scope.showPharmacy = true; //pharmacy icon will be displayed
        };
        $scope.bodyClick = function () {
            $scope.showLab = false;
            $scope.showDoctor = false;
            $scope.showPharmacy = false;


        };

//for routing the new window on click on the button
        $scope.search = function () {

            $window.location.href = ('searchdoctor');

        };

    }]);
