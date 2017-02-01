(function () {
    'use strict';
    angular.module('autoApp')
        .controller('deleteAutoController', deleteAutoController);

    deleteAutoController.$inject = ['$routeParams', 'autoFactory'];

    function deleteAutoController($routeParams, autoFactory) {
        var vm = this;
        var id = $routeParams.id;
        autoFactory.deleteAuto(id)
            .then(function () {
                window.location = 'http://localhost:3000';
            }, function (response) {
                alert('Er ging iets mis!\nBrowser code: ' + response.status)
                window.location = 'http://localhost:3000';
            });
    }
})();