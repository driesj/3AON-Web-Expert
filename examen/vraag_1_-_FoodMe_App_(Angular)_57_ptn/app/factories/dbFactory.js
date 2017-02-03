(function() {
    'use strict';
    angular.module('foodmeApp')
        .factory('dbFactory', dbFactory);

    dbFactory.$inject = ['$http'];

    function dbFactory($http) {
        var factory = {};

        factory.getRestaurants = function () {
            return $http.get('data/restaurants.json');
        };

        factory.getMenus = function () {
            return $http.get('data/menus.json');
        };

        return factory;
    }
}) ();