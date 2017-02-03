(function() {
    'use strict';
    angular.module('carConfigApp')
        .factory('dbFactory', dbFactory);

    dbFactory.$inject = ['$http'];

    function dbFactory($http) {
        var factory = {};

        factory.getAutomerken = function () {
            return $http.get('data/automerk.json');
        };

        factory.getOpties = function () {
            return $http.get('data/opties.json');
        };

        return factory;
    }
}) ();