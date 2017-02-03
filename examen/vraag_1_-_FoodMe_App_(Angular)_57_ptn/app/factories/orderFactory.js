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
        var totaalPrijs = 0

        factory.addKlantInfo = function (invoer) {
            klantInfo = {
                "klantnaam": invoer.klantnaam,
                "leveringsadres": invoer.leveringsadres,
                "telefoon": invoer.telefoon
            };
            console.log(klantInfo);
            $location.path('restaurant');
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

        factory.addToCart = function (invoer) {
            cart.push(invoer);
            totaalPrijs += invoer.prijs;
        };

        factory.getRestaurant = function () {
            return restaurant;
        };

        factory.getCart = function () {
            return cart;
        };

        factory.getTotaalPrijs = function () {
            return totaalPrijs;
        };

        return factory;
    }
})();