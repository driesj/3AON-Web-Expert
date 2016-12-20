(function () {
    'use strict';
    angular.module('autoApp', ['ngRoute', 'ngSanitize'])
        .config(moduleConfig)
        .constant('GLOBALS', {
            copyright: '(C) 2015 - AutoService APP',
            appVersion: '1.0.0'
        });

    moduleConfig.$inject = ['$routeProvider', '$locationProvider'];

    function moduleConfig($routeProvider, $locationProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeController',
            controllerAs: 'Ctrl'
        })
            .when('/auto/:id', {
                templateUrl: 'views/auto.html',
                controller: 'autoController',
                controllerAs: 'Ctrl'
            })
            .when('/deleteAuto/:id', {
                template: '',
                controller: 'deleteAutoController'
            })
            .when('/addAuto', {
                templateUrl: 'views/addAuto.html',
                controller: 'addAutoController',
                controllerAs: 'Ctrl'
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