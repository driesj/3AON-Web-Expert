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



        factory.getAuto = function (id) {
            return $http({
                method: 'GET',
                url: 'http://localhost/webexpert/AngularJS/H6/API/auto/'+id
            })
        };

        factory.deleteAuto = function (id) {
            return $http({
                method: 'POST',
                url: 'http://localhost/webexpert/AngularJS/H6/API/deleteAuto/'+id
            })
        };

        factory.addAuto = function (newAuto) {
            return $http({
                method: 'POST',
                url: 'http://localhost/webexpert/AngularJS/H6/API/newAuto',
                data: newAuto,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        };

        factory.getTypeAutos = function () {
            return $http({
                method: 'GET',
                url: 'http://localhost/webexpert/AngularJS/H6/API/typeAutos'
            })
        };

        return factory;
    }
}) ();