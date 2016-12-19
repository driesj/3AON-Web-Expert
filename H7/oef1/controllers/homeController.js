(function () {
    'use strict';
    angular.module('vehicleApp')
        .controller('homeController', homeController);

    homeController.$inject = ['filltextFactory'];

    function homeController(filltextFactory) {
        var vm = this;
        vm.vehicles = vehicleFactory.getVehicles();
    }
})();