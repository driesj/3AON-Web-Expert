(function () {
    'use strict';
    angular.module('myApp', ['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        })
            .when('/item/:id', {
                templateUrl: 'views/auto.html',
                controller: 'itemController',
                controllerAs: 'itemCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();