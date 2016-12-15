(function () {
    'use strict';
    angular.module('autoApp')
        .controller('autoController', autoController);

    autoController.$inject = ['$routeParams', 'autoService'];

    function autoController($routeParams, autoService) {
        var vm = this;
        var id = $routeParams.id;
        vm.autos = autoService.getAuto(id);
    }
}) ();