angular.module('searchDoc').controller('searchDocController', ['$scope','$http', function ($scope,$http) {

        $scope.promo = 'Docter Search/Card Page ';

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

        $scope.products =
                [
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '200 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '300 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '400 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '500 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '600 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '700 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '800 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '900 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '250 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '450 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '550 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '650 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '750 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '850 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '350 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        name: 'Dr. Ram Verma',
                        address: 'Vasant Kunj',
                        type: 'Physician',
                        qualification: 'Mbbs',
                        experience: 'Experience - 9 Years',
                        clinic: 'Dr. Ram Clinic',
                        distance: '1.5 km',
                        consultation: '450 Rs',
                        cover: 'images/doctorimage.jpg',
                        icon1: 'images/cardfont/icon1.jpg',
                        icon2: 'images/cardfont/icon2.gif',
                        cphoto1: 'images/clinic1.jpg',
                        cphoto2: 'images/clinic2.jpg',
                        cphoto3: 'images/clinic3.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                ];
        $scope.plusOne =
                function (index) {
                    $scope.products[index].likes += 1;
                };
        $scope.minusOne =
                function (index) {
                    $scope.products[index].dislikes += 1;
                };
        //For slider use
        $scope.gSlider = {
            minValue: 100,
            maxValue: 1000,
            options: {
                floor: 0,
                ceil: 1000,
                step: 50,
                draggableRange: true,
                translate: function (value) {
                    return 'INR-' + value;
                }
            }
        };


        //Slider config with steps array of letters
        $scope.slider_alphabet = {
            minValue: 0,
            maxValue: 5,
            showTicksValue: true,
            options: {
                stepsArray: 'MTWTFSS'.split('')
            }
        };

        $scope.gender = {
            name: 'male'
        };

    }]);


