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
            autos.splice(id, 1);
            return autos;
        };

        factory.addAuto = function (newAuto) {
            var id = 0;
            for (var i = 0; i < autos.length; i++) {
                if (autos[i].id >= id) {
                    id = autos[i].id + 1;
                }
            }
            newAuto.id = id;
            autos.push(newAuto);
        };

        return factory;
    }
}) ();