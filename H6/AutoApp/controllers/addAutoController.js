(function () {
    'use strict';
    angular.module('autoApp')
        .controller('addAutoController', addAutoController);

    addAutoController.$inject = ['autoFactory', '$location'];

    function addAutoController(autoFactory, $location) {
        var vm = this;
        vm.addAuto = function () {
            var newAuto = {
                omschrijf: vm.auto.omschrijf,
                prijs: vm.auto.prijs,
                type: vm.auto.type,
                verkeerTax: vm.auto.verkeerTax,
                inverkeer: vm.auto.inverkeer,
                verbruik: vm.auto.verbruik
            };

            autoFactory.addAuto(newAuto);

            $location.path('home');
        };
    }
})();