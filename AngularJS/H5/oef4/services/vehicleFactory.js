(function () {
    'use strict';
    angular.module('vehicleApp')
        .factory('vehicleFactory', vehicleFactory);

    function vehicleFactory() {
        var factory = {};

        var vehicles = [
            {
                id: 0,
                name: "Car",
                parts: {
                    wheels: 4,
                    doors: 4
                }
            },
            {
                id: 1,
                name: "Plane",
                parts: {
                    wings: 2,
                    doors: 2
                }
            },
            {
                id: 2,
                name: "Boat",
                parts: {
                    doors: 1
                }
            }
        ];

        factory.getVehicles = function () {
            return vehicles;
        };

        return factory;
    }
})();