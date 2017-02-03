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
            var order = {
                menu: invoer.menu,
                prijs: invoer.prijs
            };
            orderFactory.addToCart(order);
            vm.totaalPrijs = orderFactory.getTotaalPrijs();
        }
    }
})();