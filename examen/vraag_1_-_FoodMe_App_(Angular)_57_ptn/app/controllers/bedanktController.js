(function () {
    'use strict';
    angular.module('foodmeApp')
        .controller('bedanktController', bedanktController);

    bedanktController.$inject = ['orderFactory'];

    function bedanktController(orderFactory) {
        var vm = this;

        vm.orderID = orderFactory.createOrder();
    }
})();