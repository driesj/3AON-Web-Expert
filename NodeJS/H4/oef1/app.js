// app.js
var kwadraat = require('./kwadraat');
console.time('Tijdsduur van for-loop');
for (x = 1; x <= 10000; x++) {
    temp = kwadraat(x);
}
console.timeEnd('Tijdsduur van for-loop');