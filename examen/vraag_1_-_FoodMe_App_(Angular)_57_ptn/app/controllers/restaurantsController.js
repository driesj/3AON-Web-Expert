(function () {
    'use strict';
    angular.module('foodmeApp')
        .controller('restaurantsController', restaurantsController);

    restaurantsController.$inject = ['dbFactory', 'orderFactory'];

    function restaurantsController(dbFactory, orderFactory) {
        var vm = this;

        dbFactory.getRestaurants()
            .then(function (response) {
                vm.restaurants = response.data;
            });

        vm.kiesRest = function (data) {
            orderFactory.addRestaurant(data);
        };

        vm.useChoices = [true, true, true, true];
        vm.kitchenOptions = [
            {"kitchen": "Afrikaans"},
            {"kitchen": "Frans"},
            {"kitchen": "Italiaans"},
            {"kitchen": "Chinees"}
        ];
        vm.filterKitchen = function () {
            return function (option) {
                for (var i = 0; i < vm.useChoices.length; i++) {
                    if (vm.useChoices[i] && option.type == vm.group[i].kitchen) {
                        return true;
                    }
                }
            }
        }
    }
})();