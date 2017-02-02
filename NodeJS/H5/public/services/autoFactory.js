(function () {
    'use strict';
    angular.module('autoApp')
        .factory('autoFactory', autoFactory);

    autoFactory.$inject = ['$http'];

    function autoFactory($http) {
        var factory = {};

        factory.getAutos = function () {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/api/autos'
            })
        };

        factory.getAuto = function (id) {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/api/auto/' + id
            })
        };

        factory.deleteAuto = function (id) {
            return $http({
                method: 'POST',
                url: 'http://localhost:3000/api/deleteAuto/' + id
            })
        };

        factory.addAuto = function (newAuto) {
            return $http({
                method: 'POST',
                url: 'http://localhost:3000/api/newAuto',
                data: newAuto,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        };

        factory.getTypeAutos = function () {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/api/typeAutos'
            })
        };

        return factory;
    }
})();