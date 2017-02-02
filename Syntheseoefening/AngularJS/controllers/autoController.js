(function () {
    'use strict';
    angular.module('carConfigApp')
        .controller('autoController', autoController);

    autoController.$inject = ['dbFactory', 'offerteFactory'];

    function autoController(dbFactory, offerteFactory) {
        var vm = this;
        dbFactory.getAutomerken()
            .then(function (response) {
                vm.automerken = response.data;
            });

        vm.selectCar = function () {
            var keuzeAutomerk = {
                "merk": vm.model.merk,
                "basisprijs": vm.model.basisprijs
            };

            offerteFactory.addAutomerk(keuzeAutomerk)
        }
    }
})();