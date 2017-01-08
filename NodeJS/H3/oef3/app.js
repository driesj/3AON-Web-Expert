// app.js
var Persoon = require('./persoon');
var arrayPersonen = [];
var colors = require('colors');
var _ = require('underscore');

arrayPersonen.push(new Persoon('Rudy', 'Mas', 'rudy.mas@rudymas.be'));
arrayPersonen.push(new Persoon('Peter', 'Meisters', 'peter.meisters@email.be'));
arrayPersonen.push(new Persoon('Jan-Pieter', 'Martens', 'jan-pieter.martens@email.be'));

arrayPersonen.forEach(function (persoon) {
    console.log('Naam: ' + persoon.voornaam + ' ' + persoon.achternaam);
    console.log('E-mail: ' + colors.red.underline(persoon.email));
    console.log('***');
});

persoon = _.first(arrayPersonen);
console.log('Eerste persoon');
console.log('--------------');
console.log('Naam: ' + persoon.voornaam + ' ' + persoon.achternaam);
console.log('E-mail: ' + colors.red.underline(persoon.email));
console.log('***');

persoon = _.last(arrayPersonen);
console.log('Laatste persoon');
console.log('---------------');
console.log('Naam: ' + persoon.voornaam + ' ' + persoon.achternaam);
console.log('E-mail: ' + colors.red.underline(persoon.email));
console.log('***');

console.log('Personen gesorteerd');
console.log('-------------------');
_.sortBy(arrayPersonen, 'voornaam').forEach(function (persoon) {
    console.log('Naam: ' + persoon.voornaam + ' ' + persoon.achternaam);
    console.log('E-mail: ' + colors.red.underline(persoon.email));
    console.log('***');
});
