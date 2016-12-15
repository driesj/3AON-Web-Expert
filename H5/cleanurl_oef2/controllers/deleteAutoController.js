(function () {
    'use strict';
    angular.module('autoApp')
        .controller('deleteAutoController', deleteAutoController);

    deleteAutoController.$inject = ['$routeParams', 'autoFactory', '$location', 'GLOBALS'];

    function deleteAutoController($routeParams, autoFactory, $location, GLOBALS) {
        var vm = this;
        var id = $routeParams.id;
        vm.autos = autoFactory.deleteAuto(id);
        $location.path('home');
        vm.copyright = GLOBALS.copyright;
        vm.appVersion = GLOBALS.appVersion;
    }
}) ();