(function () {
    'use strict';
    angular.module('autoApp')
        .controller('homeController', homeController);

    homeController.$inject = ['autoFactory', '$controller'];

    function homeController(autoFactory, $controller) {
        var vm = this;
        vm.autos = autoFactory.getAutos();
        $controller('footerController').addFooter();
    }
})();