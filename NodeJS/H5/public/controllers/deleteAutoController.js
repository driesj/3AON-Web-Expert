(function () {
    'use strict';
    angular.module('autoApp')
        .controller('deleteAutoController', deleteAutoController);

    deleteAutoController.$inject = ['$routeParams', 'autoFactory', '$location'];

    function deleteAutoController($routeParams, autoFactory, $location) {
        var vm = this;
        var id = $routeParams.id;
        autoFactory.deleteAuto(id)
            .then(function () {
                $location.path('home')
            }, function (response) {
                alert('Er ging iets mis!\nBrowser code: ' + response.status)
                $location.path('home')
            });

    }
})();