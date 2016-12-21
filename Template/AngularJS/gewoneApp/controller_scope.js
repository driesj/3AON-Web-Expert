(function() {
    angular.module('app')
        .controller('myController', myControllerFn);

    myControllerFn.$inject = ['$scope', '$location'];

    function myControllerFn($scope, $location) {
        $scope.var = '';
        $scope.function = function() {};
        function doSomething() {}
        doSomething();
    }
}) ();