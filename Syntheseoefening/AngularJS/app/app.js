(function () {
    'use strict';
    angular.module('carConfigApp', ['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider', '$locationProvider'];

    function moduleConfig($routeProvider, $locationProvider) {
        $routeProvider.when('/auto', {
            templateUrl: 'views/auto.html',
            controller: 'autoController',
            controllerAs: 'Ctrl'
        })
            .when('/config', {
                templateUrl: 'views/config.html',
                controller: 'configController',
                controllerAs: 'Ctrl'
            })
            .when('/overzicht', {
                templateUrl: 'views/overzicht.html',
                controller: 'overzichtController',
                controllerAs: 'Ctrl'
            })
            .otherwise({
                redirectTo: '/auto'
            });

        $locationProvider.html5Mode(true);
    }
})();