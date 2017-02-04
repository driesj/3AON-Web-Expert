(function () {
    'use strict';
    angular.module('foodmeApp')
        .controller('shoppingcartController', shoppingcartController);

    shoppingcartController.$inject = ['orderFactory'];

    function shoppingcartController(orderFactory) {
        var vm = this;

        vm.klantInfo = orderFactory.getKlantInfo();
        vm.restaurant = orderFactory.getRestaurant();
        vm.cart = orderFactory.getCart();
        vm.totaalPrijs = orderFactory.calcTotaalprijs();

        vm.emptyCart = function () {
            orderFactory.emptyCart();
            vm.cart = orderFactory.getCart();
            vm.totaalPrijs = orderFactory.calcTotaalprijs();
        };

        vm.updateCart = function () {
            orderFactory.setCart(vm.cart);
            vm.totaalPrijs = orderFactory.calcTotaalprijs();
        };
    }
})();