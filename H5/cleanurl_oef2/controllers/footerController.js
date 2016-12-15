(function () {
    'use strict';
    angular.module('autoApp')
        .controller('footerController', footerController);

    footerController.$inject = ['GLOBALS'];

    function footerController(GLOBALS) {
        var vm = this;
        vm.footer = GLOBALS.copyright + ' - Appversie: ' + GLOBALS.appVersion;
    }
})();