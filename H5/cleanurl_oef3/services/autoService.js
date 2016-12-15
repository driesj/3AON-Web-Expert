(function() {
    'use strict';
    angular.module('autoApp')
        .service('autoService', autoService);

    function autoService() {
        var autos = [
            {id: 1, omschrijf: 'A 180', prijs: 24242, type: 'A', verkeerTax: 250, inverkeer: 500, verbruik: 5.20},
            {id: 2, omschrijf: 'A 180 CDI BlueEFFICIENCY', prijs: 26015, type: 'A', verkeerTax: 251, inverkeer: 500, verbruik: 5.20},
            {id: 3, omschrijf: 'B 200 CDI BlueEFFICIENCY', prijs: 30129, type: 'B', verkeerTax: 252, inverkeer: 500, verbruik: 5.20},
            {id: 4, omschrijf: 'C 250 CGI BlueEFFICIENCY', prijs: 40414, type: 'C', verkeerTax: 253, inverkeer: 500, verbruik: 5.20},
            {id: 5, omschrijf: 'C 300 CDI 4MATIC BlueEFFICIENCY', prijs: 48642, type: 'C', verkeerTax: 254, inverkeer: 500, verbruik: 5.20},
            {id: 6, omschrijf: 'C 350 CGI 4MATIC BlueEFFICIENCY', prijs: 50941, type: 'C', verkeerTax: 255, inverkeer: 500, verbruik: 5.20},
            {id: 7, omschrijf: 'CL 500 CDI 4MATIC BlueEFFICIENCY', prijs: 129954, type: 'CL', verkeerTax: 256, inverkeer: 500, verbruik: 5.20},
            {id: 8, omschrijf: 'CL 600', prijs: 170489, type: 'CL', verkeerTax: 257, inverkeer: 500, verbruik: 5.20}
        ];

        this.getAutos = function () {
            return autos;
        };

        this.getAuto = function (id) {
            return autos[id];
        };

        this.deleteAuto = function (id) {
            autos.splice(id, 1);
            return autos;
        };

        this.addAuto = function (newAuto) {
            var id = 0;
            for (var i = 0; i < autos.length; i++) {
                if (autos[i].id >= id) {
                    id = autos[i].id + 1;
                }
            }
            newAuto.id = id;
            autos.push(newAuto);
        };
    }
}) ();