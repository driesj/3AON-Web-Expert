(function () {
    'use strict';
    angular.module('autoApp', ['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider', '$locationProvider'];

    function moduleConfig($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        })
            .when('/auto/:id', {
                templateUrl: 'views/auto.html',
                controller: 'autoController',
                controllerAs: 'autoCtrl'
            })
            .when('/partners', {
                templateUrl: 'views/partners.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }
})();