(function () {
    'use strict';
    angular.module('foodmeApp', ['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider', '$locationProvider'];

    function moduleConfig($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/aanmelden.html',
            controller: 'aanmeldenController',
            controllerAs: 'Ctrl'
        })
            .when('/aanmelden', {
                templateUrl: 'views/aanmelden.html',
                controller: 'aanmeldenController',
                controllerAs: 'Ctrl'
            })
            .when('/restaurant', {
                templateUrl: 'views/restaurants.html',
                controller: 'restaurantsController',
                controllerAs: 'Ctrl'
            })
            .when('/menu', {
                templateUrl: 'views/menu.html',
                controller: 'menuController',
                controllerAs: 'Ctrl'
            })
            .when('/cart', {
                templateUrl: 'views/shoppingcart.html',
                controller: 'shoppingcartController',
                controllerAs: 'Ctrl'
            })
            .when('/about', {
                templateUrl: 'views/over_ons.html',
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.hashPrefix('');
    }
})();