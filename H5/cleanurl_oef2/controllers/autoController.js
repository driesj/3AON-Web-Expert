(function () {
    'use strict';
    angular.module('autoApp')
        .controller('autoController', autoController);

    autoController.$inject = ['$routeParams', 'autoFactory'];

    function autoController($routeParams, autoFactory) {
        var vm = this;
        var id = $routeParams.id;
        vm.autos = autoFactory.getAuto(id);
    }
}) ();