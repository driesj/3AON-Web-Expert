var voornaam = 'Peter';
var achternaam = 'Kassenaar';
var email = '"info@kassenaar.com';
var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'application/json'});
    response.write('{');
    response.write('"voornaam":"'+voornaam+'",');
    response.write('"achternaam":"'+achternaam+'",');
    response.write('"email":"'+email+'"');
    response.write('}');
    response.end();
});
server.listen(3000);
console.log('Server gestart op http://localhost:3000 ...');