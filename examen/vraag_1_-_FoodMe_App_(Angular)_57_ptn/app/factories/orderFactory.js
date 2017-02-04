(function () {
    'use strict';
    angular.module('foodmeApp')
        .factory('orderFactory', orderFactory);

    orderFactory.$inject = ['$location'];

    function orderFactory($location) {
        var factory = {};
        var klantInfo = {"klantnaam": "Onbekend", "leveringsadres": "Onbekend", "telefoon": "Onbekend"};
        var restaurant = {};
        var cart = [];

        factory.addKlantInfo = function (invoer) {
            klantInfo = {
                "klantnaam": invoer.klantnaam,
                "leveringsadres": invoer.leveringsadres,
                "telefoon": invoer.telefoon
            };
            $location.path('restaurant');
        };

        factory.getKlantInfo = function () {
            return klantInfo;
        };

        factory.addRestaurant = function (invoer) {
            restaurant = {
                "id": invoer.id,
                "naam": invoer.naam,
                "beschrijving": invoer.beschrijving,
                "keuken": invoer.keuken,
                "type": invoer.type,
                "rating": invoer.rating
            }
        };

        factory.getRestaurant = function () {
            return restaurant;
        };

        factory.addToCart = function (invoer) {
            var index = cart.indexOf(invoer);
            if (index == -1) {
                invoer.aantal = 1;
                cart.push(invoer);
            } else {
                cart[index].aantal++;
            }
        };

        factory.deleteFromCart = function (invoer) {
            var index = cart.indexOf(invoer);
            if (index != -1) {
                cart.splice(index, 1);
            }
        };

        factory.emptyCart = function () {
            cart = [];
        };

        factory.getCart = function () {
            return cart;
        };

        factory.setCart = function (invoer) {
            cart = invoer;
        };

        factory.calcTotaalprijs = function () {
            var totaalprijs = 0;
            for (var i = 0; i < cart.length; i++) {
                totaalprijs += cart[i].aantal * cart[i].prijs;
            }
            return totaalprijs;
        };

        factory.createOrder = function () {
            var orderID = Math.round(Math.random() * 1000 + 1);

            // Hier komt dan de code om de bestelling op te slaan in de Database

            return orderID;
        };

        return factory;
    }
})();