//var sample = angular.module('DashboardModule', ['toastr']);

// Created by Gaurav Rathi.

var sample = angular.module('DashboardModule', ['ui.router', 'toastr', 'ui.bootstrap', 'xeditable','mwl.calendar','ngAnimate']);

sample.config(function ($stateProvider, $urlRouterProvider) {
   
    $stateProvider
            .state('dashboard',
                    {
                        url: '/dashboard',
                        templateUrl: 'templates/dashboardHome.ejs',
                        controller: 'DashboardController'
                    })
            .state('pathLab',
                    {
                        url: '/pathLab',
                        templateUrl: 'templates/sideMenu/PathLabs/PathLabs.ejs',
                    })
            .state('clinic',
                    {
                        url: '/clinic',
                        templateUrl: 'templates/sideMenu/clinic/clinic.ejs'
                    })
            .state('data',
                    {
                        url: '/data',
                        templateUrl: 'templates/sideMenu/data/data.ejs'
                    })
            .state('emr',
                    {
                        url: '/emr',
                        templateUrl: 'templates/sideMenu/emr/emr.ejs'

                    })
            .state('emr.allergyList',
                    {
                        url: '/allergyList',
                        templateUrl: 'templates/sideMenu/emr/allergyList.ejs'


                    })
            .state('emr.billing',
                    {
                        url: '/billing',
                        templateUrl: 'templates/sideMenu/emr/billing.ejs',
                        controller: 'BillingController'
                    })
            .state('emr.ePrescription',
                    {
                        url: '/ePrescription',
                        templateUrl: 'templates/sideMenu/emr/e-Prescription.ejs',
                        controller: 'ePrescriptionController'
                    })
            .state('emr.history',
                    {
                        url: '/history',
                        templateUrl: 'templates/sideMenu/emr/history.ejs'
                    })
            .state('emr.notepad',
                    {
                        url: '/notepad',
                        templateUrl: 'templates/sideMenu/emr/notepad.ejs'
                    })
            .state('emr.pathLabReport',
                    {
                        url: '/pathLabReport',
                        templateUrl: 'templates/sideMenu/emr/pathLabReport.ejs'
                    })
            .state('emr.patientReport',
                    {
                        url: '/patientReport',
                        templateUrl: 'templates/sideMenu/emr/patientReport.ejs'
                    })
            .state('emr.treatmentPlanTracker',
                    {
                        url: '/treatmentPlanTracker',
                        templateUrl: 'templates/sideMenu/emr/treatmentPlanTracker.ejs'
                    })
            .state('patient',
                    {
                        url: '/patient',
                        templateUrl: 'templates/sideMenu/patient/patient.ejs'
                    })
            .state('schedular',
                    {
                        url: '/schedular',
                        templateUrl: 'templates/sideMenu/schedular/schedule.ejs'
                    })
            .state('pharmacy',
                    {
                        url: '/pharmacy',
                        templateUrl: 'templates/sideMenu/pharmacy/pharmacy.ejs'
                    })
            .state('billingSideMenu',
                    {
                        url: '/billingSideMenu',
                        templateUrl: 'templates/sideMenu/billing/billingSideMenu.ejs'
                    })
            .state('userProfile',
                    {
                        url: '/userProfile',
                        templateUrl: 'templates/Doctors/UserProfile.ejs',
                        controller: 'userProfileController'
                    })
            .state('setting',
                    {
                        url: '/setting',
                        templateUrl: 'templates/Doctors/setting.ejs'
                    })
            .state('editProfile',
                    {
                        url: '/editProfile',
                        templateUrl: 'templates/Doctors/editProfile.ejs'
                    })
            .state('editProfile.personalDetails',
                    {
                        url: '/personalDetails',
                        templateUrl: 'templates/Doctors/PersonalDetails.ejs',
                        controller: 'personalDetailsController'
                    })
            .state('editProfile.qualification',
                    {
                        url: '/qualification',
                        templateUrl: 'templates/Doctors/qualification.ejs'
                    })
            .state('editProfile.drtimetable',
                    {
                        url: '/drtimetable',
                        templateUrl: 'templates/Doctors/drtimetable.ejs',
                        controller: "TimeTableController"
                    })
            .state('editProfile.address',
                    {
                        url: '/address',
                        templateUrl: 'templates/Doctors/address.ejs'
                    })
            .state('clinicTab',
                    {
                        url: '/clinicTab',
                        templateUrl: 'templates/sideMenu/clinic/clinicTab.ejs'
                    })
            .state('clinicTab.basicinfo',
                    {
                        url: '/basicinfo',
                        templateUrl: 'templates/sideMenu/clinic/basicinfo.ejs'
                    })
            .state('clinicTab.staff',
                    {
                        url: '/staff',
                        templateUrl: 'templates/sideMenu/clinic/staff.ejs',
                        controller: 'staffController'
                    })
            .state('clinicTab.Tools',
                    {
                        url: '/Tools',
                        templateUrl: 'templates/sideMenu/clinic/Tools.ejs',
                        controller: 'toolCtrl'
                    })
            .state('schedulerTab',
                    {
                        url: '/schedulerTab',
                        templateUrl: 'templates/sideMenu/schedular/schedulerTab.ejs'
                    })
            .state('schedulerTab.appointment',
                    {
                        url: '/appointment',
                        templateUrl: 'templates/sideMenu/schedular/appointment.ejs',
                        controller: 'appointmentController'
                    })
            .state('schedulerTab.scheduler',
                    {
                        url: '/scheduler',
                        templateUrl: 'templates/sideMenu/schedular/scheduler.ejs'
                    });
//            $urlRouterProvider.otherwise('/dashboard');




});
