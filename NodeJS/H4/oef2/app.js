// app.js
var file = __filename;
var path = require('path');
console.log('2');
console.log('-');
console.log(file);
console.log('*****');
console.log('2a');
console.log('--');
console.log('Het path naar het bestand: ' + path.dirname(file));
console.log('De bestandsnaam is: ' + path.basename(file));
console.log('De extensie van het bestand: ' + path.extname(file));