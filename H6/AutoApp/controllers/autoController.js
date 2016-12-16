(function () {
    'use strict';
    angular.module('autoApp')
        .controller('autoController', autoController);

    autoController.$inject = ['$routeParams', 'autoFactory'];

    function autoController($routeParams, autoFactory) {
        var vm = this;
        var id = $routeParams.id;
        autoFactory.getAuto(id)
            .then(function (response) {
                vm.autos = response.data;
            });
    }
}) ();