(function () {
    'use strict';
    angular.module('autoApp')
        .controller('homeController', homeController);

    homeController.$inject = ['autoService'];

    function homeController(autoService) {
        var vm = this;
        vm.autos = autoService.getAutos();
    }
})();