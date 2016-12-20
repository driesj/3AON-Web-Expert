(function() {
    'use strict';
    angular.module('autoApp')
        .factory('autoFactory', autoFactory);

    autoFactory.$inject = ['$http'];

    function autoFactory($http) {
        var factory = {};

        factory.getAutos = function () {
            return $http({
                method: 'GET',
                url: 'http://localhost/webexpert/H6/API/autos'
            })
        };

        factory.getAuto = function (id) {
            return $http({
                method: 'GET',
                url: 'http://localhost/webexpert/H6/API/auto/'+id
            })
        };

        factory.deleteAuto = function (id) {
            return $http({
                method: 'POST',
                url: 'http://localhost/webexpert/H6/API/deleteAuto/'+id
            })
        };

        factory.addAuto = function (newAuto) {
            return $http({
                method: 'POST',
                url: 'http://localhost/webexpert/H6/API/newAuto',
                data: newAuto,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        };

        factory.getTypeAutos = function () {
            return $http({
                method: 'GET',
                url: 'http://localhost/webexpert/H6/API/typeAutos'
            })
        };

        factory.getPrijsklasse = function () {
            return $http({
                method: 'GET',
                url: 'http://localhost/webexpert/H6/API/prijsklasse'
            })
        }

        return factory;
    }
}) ();