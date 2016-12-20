(function () {
    'use strict';
    angular.module('autoApp')
        .controller('homeController', homeController);

    homeController.$inject = ['autoFactory'];

    function homeController(autoFactory) {
        var vm = this;
        vm.minPrijsSearch = 0;
        vm.maxPrijsSearch = 9999999;
        autoFactory.getAutos()
            .then(function (response) {
                vm.autos = response.data.data.autos
            });
        autoFactory.getTypeAutos()
            .then(function (response) {
                vm.typeAutos = response.data.data.typeAutos
            });
        autoFactory.getPrijsklasse()
            .then(function (response) {
                vm.prijsklasse = response.data.data.prijsklasse
            });

        vm.setFilter = function () {
            vm.typeSearch = vm.typeSelect;
            if (vm.prijsSelect == '')
            {
                vm.minPrijsSearch = 0;
                vm.maxPrijsSearch = 9999999;
            } else {
                var prijsSelect = angular.fromJson(vm.prijsSelect);
                vm.minPrijsSearch = parseInt(prijsSelect.min_prijs);
                vm.maxPrijsSearch = parseInt(prijsSelect.max_prijs);
            }
        }
    }
})();