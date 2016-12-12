(function () {
    'use strict';
    angular.module('autoApp', ['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider', '$locationProvider'];

    function moduleConfig($routeProvider, $locationProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        })
            .when('/auto/:id', {
                templateUrl: 'views/auto.html',
                controller: 'autoController',
                controllerAs: 'autoCtrl'
            })
            .when('/deleteAuto/:id', {
                template: '',
                controller: 'deleteAutoController'
            })
            .when('/addAuto', {
                templateUrl: 'views/addAuto.html',
                controller: 'addAutoController',
                controllerAs: 'addAutoCtrl'
            })
            .when('/partners', {
                templateUrl: 'views/partners.html'
            })
            .otherwise({
                redirectTo: '/home'
            });

        $locationProvider.html5Mode(true);
    }
})();