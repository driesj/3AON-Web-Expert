(function () {
    'use strict';
    angular.module('autoApp')
        .controller('deleteAutoController', deleteAutoController);

    deleteAutoController.$inject = ['$routeParams', 'autoFactory', '$location'];

    function deleteAutoController($routeParams, autoFactory, $location) {
        var vm = this;
        var id = $routeParams.id;
        vm.autos = autoFactory.deleteAuto(id);
        $location.path('home');
    }
}) ();