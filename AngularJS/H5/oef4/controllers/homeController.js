(function () {
    'use strict';
    angular.module('vehicleApp')
        .controller('homeController', homeController);

    homeController.$inject = ['vehicleFactory'];

    function homeController(vehicleFactory) {
        var vm = this;
        vm.vehicles = vehicleFactory.getVehicles();
    }
})();