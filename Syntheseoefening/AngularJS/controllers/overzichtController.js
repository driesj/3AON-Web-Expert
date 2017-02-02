(function () {
    'use strict';
    angular.module('carConfigApp')
        .controller('overzichtController', overzichtController);

    overzichtController.$inject = ['offerteFactory'];

    function overzichtController(offerteFactory) {
        var vm = this;
        vm.automerk = offerteFactory.getAutomerk();
        vm.opties = offerteFactory.getOpties();
        vm.prijsopties = 0;

        angular.forEach(vm.opties, function(value) {
            vm.prijsopties += parseInt(value.prijs);
        });
        vm.totaalprijsExcl = vm.automerk.basisprijs + vm.prijsopties;
        vm.BTW = vm.totaalprijsExcl * 0.21;
        vm.totaalprijsIncl = vm.totaalprijsExcl + vm.BTW;
    }
})();