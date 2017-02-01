(function () {
    'use strict';
    angular.module('autoApp')
        .controller('addAutoController', addAutoController);

    addAutoController.$inject = ['autoFactory', '$location'];

    function addAutoController(autoFactory, $location) {
        var vm = this;
        autoFactory.getTypeAutos()
            .then(function (response) {
                vm.typeAutos = response.data.data.typeAutos
            });

        vm.addAuto = function () {
            var newAuto = { data: {
                omschrijf: vm.auto.omschrijf,
                prijs: vm.auto.prijs,
                type: vm.auto.type.id,
                verkeerTax: vm.auto.verkeerTax,
                inverkeer: vm.auto.inverkeer,
                verbruik: vm.auto.verbruik
            }};

            autoFactory.addAuto(newAuto)
                .then(function () {
                    $location.path('home')
                }, function (response) {
                    alert('Er ging iets mis!\nBrowser code: ' + response.status);
                    $location.path('home')
                });
        };
    }
})();