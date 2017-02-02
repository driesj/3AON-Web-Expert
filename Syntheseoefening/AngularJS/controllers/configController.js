(function () {
    'use strict';
    angular.module('carConfigApp')
        .controller('configController', configController);

    configController.$inject = ['offerteFactory', 'dbFactory'];

    function configController(offerteFactory, dbFactory) {
        var vm = this;
        vm.auto = offerteFactory.getAutomerk();
        vm.optiesGekozen = offerteFactory.getOpties();

        dbFactory.getOpties()
            .then(function (response) {
                vm.opties = response.data;
            });

        vm.addOptie = function (optie, prijs) {
            var keuzeOptie = {
                "optie": optie,
                "prijs": prijs
            };

            offerteFactory.addOptie(keuzeOptie);
        }
    }
})();