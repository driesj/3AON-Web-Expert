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
        }
    }
})();