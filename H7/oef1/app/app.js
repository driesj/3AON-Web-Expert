(function () {
    'use strict';
    angular.module('personApp', ['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider', '$locationProvider'];

    function moduleConfig($routeProvider, $locationProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeController',
            controllerAs: 'Ctrl'
        })
            .otherwise({
                redirectTo: '/home'
            });

        $locationProvider.html5Mode(true);
    }
})();