(function () {
    'use strict';
    angular.module('autoApp')
        .controller('autoController', autoController);

    autoController.$inject = ['autoFactory'];

    function autoController(autoFactory) {
        var vm = this;
        var id = 1;
        autoFactory.getAuto(id)
            .then(function (response) {
                vm.autos = response.data.data;
            });
    }
})();