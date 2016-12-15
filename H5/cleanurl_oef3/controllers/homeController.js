(function () {
    'use strict';
    angular.module('autoApp')
        .controller('homeController', homeController);

    homeController.$inject = ['autoFactory', 'GLOBALS'];

    function homeController(autoFactory, GLOBALS    ) {
        var vm = this;
        vm.autos = autoFactory.getAutos();
        vm.copyright = GLOBALS.copyright;
        vm.appVersion = GLOBALS.appVersion;
    }
}) ();