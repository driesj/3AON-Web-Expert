(function () {
    'use strict';
    angular.module('autoApp')
        .controller('homeController', homeController);

    homeController.$inject = ['autoFactory'];

    function homeController(autoFactory) {
        var vm = this;
        vm.autos = autoFactory.getAutos();
    }
})();