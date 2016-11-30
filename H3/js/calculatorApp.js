var app = angular.module('calculatorApp', []);
app.controller('CalcController', function ($scope) {
    $scope.calcAdd = function () {
        $scope.result = $scope.number1 + $scope.number2;
    }
    $scope.calcSub = function () {
        $scope.result = $scope.number1 - $scope.number2;
    }
    $scope.calcMult = function () {
        $scope.result = $scope.number1 * $scope.number2;
    }
    $scope.calcDev = function () {
        if ($scope.number2 == 0) {
            $scope.result = 'Devision by 0 is not allowed.';
        } else {
            $scope.result = $scope.number1 / $scope.number2;
        }
    }
});