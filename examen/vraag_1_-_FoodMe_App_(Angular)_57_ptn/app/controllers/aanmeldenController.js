(function () {
    'use strict';
    angular.module('foodmeApp')
        .controller('aanmeldenController', aanmeldenController);

    aanmeldenController.$inject = ['orderFactory'];

    function aanmeldenController(orderFactory) {
        var vm = this;

        vm.storeKlant = function() {
            var klantgegevens = {
                klantnaam: vm.klantnaam,
                leveringsadres: vm.leveringsadres,
                telefoon: vm.telefoon
            };

            orderFactory.addKlantInfo(klantgegevens);
        }
    }
})();