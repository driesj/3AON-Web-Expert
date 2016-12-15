(function () {
    'use strict';
    angular.module('autoApp')
        .controller('deleteAutoController', deleteAutoController);

    deleteAutoController.$inject = ['$routeParams', 'autoService', '$location'];

    function deleteAutoController($routeParams, autoService, $location) {
        var vm = this;
        var id = $routeParams.id;
        vm.autos = autoService.deleteAuto(id);
        $location.path('home');
    }
}) ();