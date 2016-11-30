var app = angular.module('fotoApp', []);
app.controller('fotoController', function ($scope) {
    $scope.people = [
            {name: 'Elise', photo: 'portret_elise.jpg'},
            {name: 'Maria', photo: 'portret_maria.jpg'},
            {name: 'Peter', photo: 'portret_peter.jpg'}
        ];
    $scope.reversed = true;
});