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
        /*
         * For AngularJS 1.6.* the standard prefix is changed into '!' resulting in /#!/ for the routes
         * You need to add following line to return to previous versions of the routing
         */
        $locationProvider.hashPrefix('');
    }
})();