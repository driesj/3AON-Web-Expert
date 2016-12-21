(function () {
    'use strict';
    angular.module('autoApp')
        .controller('homeController', homeController);

    function homeController() {
        var vm = this;
        vm.items = [
            {id: 1, info: 'something'},
            {id: 2, info: 'something else'}
        ]
    }
}) ();