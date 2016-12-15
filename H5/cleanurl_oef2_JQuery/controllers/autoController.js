(function () {
    'use strict';
    angular.module('autoApp')
        .controller('autoController', autoController);

    autoController.$inject = ['$routeParams', 'autoFactory', 'GLOBALS'];

    function autoController($routeParams, autoFactory, GLOBALS) {
        var vm = this;
        var id = $routeParams.id;
        vm.autos = autoFactory.getAuto(id);
        vm.copyright = GLOBALS.copyright;
        vm.appVersion = GLOBALS.appVersion;
    }
}) ();