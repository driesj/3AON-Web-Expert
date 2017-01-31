(function () {
    'use strict';
    angular.module('personApp')
        .controller('homeController', homeController);

    homeController.$inject = ['filltextFactory'];

    function homeController(filltextFactory) {
        var vm = this;
        vm.hide = true;
        vm.persons = filltextFactory.getPersons()
            .then(function (response) {
                vm.persons = response.data;
            });

        vm.changePerson = function($event) {
            vm.person = vm.personChoice;
            vm.hide = false;
        }
    }
})();