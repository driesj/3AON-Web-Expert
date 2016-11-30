(function() {
    angular.module('artikel3App')
        .controller('Artikel3Controller', [artikel3ControllerFn]);

    function artikel3ControllerFn() {
        var vm = this;

        vm.artikelen = [
            {artId: '000001', omschrijf: 'Tandenborstel', verkoopPrijs: 3.25, aankoopPrijs: 1.50},
            {artId: '000002', omschrijf: 'Handdoek', verkoopPrijs: 3.25, aankoopPrijs: 2.50},
            {artId: '000003', omschrijf: 'Washandje', verkoopPrijs: 4.75, aankoopPrijs: 0.40},
            {artId: '000004', omschrijf: 'Keukenrol', verkoopPrijs: 1.20, aankoopPrijs: 0.65},
            {artId: '000005', omschrijf: 'Tandpasta', verkoopPrijs: 0.65, aankoopPrijs: 0.15}
        ];
        vm.clickMe = function(artikel) {
            alert(artikel.omschrijf + ' - ' + artikel.verkoopPrijs + ' - ' + artikel.aankoopPrijs);
        };
    }
}) ();