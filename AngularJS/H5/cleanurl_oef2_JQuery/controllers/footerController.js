(function () {
    'use strict';
    angular.module('autoApp')
        .controller('footerController', footerController);

    footerController.$inject = ['GLOBALS'];

    function footerController(GLOBALS) {
        var vm = this;
        vm.addFooter = function () {
            $('footer').html('<p style="text-align: center; padding: 0; margin: 0"><span>' + GLOBALS.copyright + '</span> - <span>Appversie: ' + GLOBALS.appVersion + '</span></p>');
        };
    }
})();