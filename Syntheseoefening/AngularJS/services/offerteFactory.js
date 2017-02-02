(function () {
    'use strict';
    angular.module('carConfigApp')
        .factory('offerteFactory', offerteFactory);

    offerteFactory.$inject = ['$location'];

    function offerteFactory($location) {
        var factory = {};
        var merk = {"merk": "Maak eerst een merk keuze!", "basisprijs": 0};
        var opties = [];

        factory.addAutomerk = function (invoer) {
            merk = {
                "merk": invoer.merk,
                "basisprijs": invoer.basisprijs
            };
            opties = [];
            $location.path('config');
        };

        factory.addOptie = function (invoer) {
            opties.push(invoer);
        };

        factory.getAutomerk = function () {
            return merk;
        };

        factory.getOpties = function () {
            return opties;
        };

        return factory;
    }
})();