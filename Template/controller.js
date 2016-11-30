(function() {
    angular.module('app')
        .controller('myController', myControllerFn);

    function myControllerFn() {
        var vm = this;

        vm.var = '';
        vm.function = function() {};
        vm.function();
    }
}) ();