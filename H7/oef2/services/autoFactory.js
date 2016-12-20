(function () {
    'use strict';
    angular.module('autoApp')
        .factory('autoFactory', autoFactory);

    autoFactory.$inject = ['$http', 'GLOBALS'];

    function autoFactory($http, GLOBALS) {
        var factory = {};

        factory.getAutos = function () {
            return $http({
                method: 'GET',
                url: GLOBALS.ApiUrl + '/autos'
            })
        };

        factory.getAuto = function (id) {
            return $http({
                method: 'GET',
                url: GLOBALS.ApiUrl + '/auto/' + id
            })
        };

        factory.deleteAuto = function (id) {
            return $http({
                method: 'POST',
                url: GLOBALS.ApiUrl + '/deleteAuto/' + id
            })
        };

        factory.addAuto = function (newAuto) {
            return $http({
                method: 'POST',
                url: GLOBALS.ApiUrl + '/newAuto',
                data: newAuto,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        };

        factory.getTypeAutos = function () {
            return $http({
                method: 'GET',
                url: GLOBALS.ApiUrl + '/typeAutos'
            })
        };

        factory.getPrijsklasse = function () {
            return $http({
                method: 'GET',
                url: GLOBALS.ApiUrl + '/prijsklasse'
            })
        }

        return factory;
    }
})();