(function () {
    'use strict';
    angular.module('foodmeApp')
        .controller('menuController', menuController);

    menuController.$inject = ['dbFactory', 'orderFactory'];

    function menuController(dbFactory, orderFactory) {
        var vm = this;

        dbFactory.getMenus()
            .then(function (response) {
                vm.menus = response.data;
            });

        vm.restaurant = orderFactory.getRestaurant();
        vm.cart = orderFactory.getCart();
        vm.totaalPrijs = 0;

        vm.addToCart = function (invoer) {
            orderFactory.addToCart(invoer);
            vm.totaalPrijs = orderFactory.calcTotaalprijs();
        };

        vm.deleteFromCart = function (invoer) {
            orderFactory.deleteFromCart(invoer);
            vm.totaalPrijs = orderFactory.calcTotaalprijs();
        };

        vm.updateCart = function () {
            orderFactory.setCart(vm.cart);
            vm.totaalPrijs = orderFactory.calcTotaalprijs();
        };
    }
})();