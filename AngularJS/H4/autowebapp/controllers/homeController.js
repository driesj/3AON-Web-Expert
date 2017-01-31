(function () {
    'use strict';
    angular.module('autoApp')
        .controller('homeController', homeController);

    function homeController() {
        var vm = this;
        vm.autos = [
            {id: 0, omschrijf: 'A 180', prijs: 24242, type: 'A'},
            {id: 1, omschrijf: 'A 180 CDI BlueEFFICIENCY', prijs: 26015, type: 'A'},
            {id: 2, omschrijf: 'B 200 CDI BlueEFFICIENCY', prijs: 30129, type: 'B'},
            {id: 3, omschrijf: 'C 250 CGI BlueEFFICIENCY', prijs: 40414, type: 'C'},
            {id: 4, omschrijf: 'C 300 CDI 4MATIC BlueEFFICIENCY', prijs: 48642, type: 'C'},
            {id: 5, omschrijf: 'C 350 CGI 4MATIC BlueEFFICIENCY', prijs: 50941, type: 'C'},
            {id: 6, omschrijf: 'CL 500 CDI 4MATIC BlueEFFICIENCY', prijs: 129954, type: 'CL'},
            {id: 7, omschrijf: 'CL 600', prijs: 170489, type: 'CL'}
        ]
    }
}) ();