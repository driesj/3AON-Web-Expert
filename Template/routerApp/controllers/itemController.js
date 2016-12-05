(function () {
    'use strict';
    angular.module('autoApp')
        .controller('itemController', itemController);

    itemController.$inject = ['$routeParams'];

    var items = [
        {id: 1, info: 'something'},
        {id: 2, info: 'something else'}
    ];

    function itemController($routeParams) {
        var vm = this;
        vm.id = $routeParams.id;
        vm.item = items[vm.id - 1].info;
    }
}) ();