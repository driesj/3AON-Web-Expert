(function () {
    'use strict';
    angular.module('autoApp')
        .controller('homeController', homeController);

    homeController.$inject = ['autoFactory'];

    function homeController(autoFactory) {
        var vm = this;
        autoFactory.getAutos()
            .then(function (response) {
                vm.autos = response.data.data.autos;
            });
    }
})();