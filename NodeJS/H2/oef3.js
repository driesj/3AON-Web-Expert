var persoon = {
    voornaam: 'Peter',
    achternaam: 'Kassenaar',
    email: 'info@kassenaar.com'
};
var contact = {
    adres: 'Dorpsstraat 24',
    postcode: '1000 AA',
    plaats: 'Amsterdam',
    openingstijden: 'dagelijks van 9:00-17:00 uur'
};
var httpResponse404 = {
    status: '404',
    text: 'Niet gevonden...'
};

var http = require('http');
var server = http.createServer(function (request, response) {
    var routes = ['/persoon', '/contact'];
    if (routes.indexOf(request.url) != -1) {
        if (request.url == '/persoon') {
            response.writeHead(200, {'Content-Type' : 'application/json'});
            response.write(JSON.stringify(persoon));
        } else if (request.url == '/contact') {
            response.writeHead(200, {'Content-Type' : 'application/json'});
            response.write(JSON.stringify(contact));
        }
    } else {
        response.writeHead(404, {'Content-Type':'application/json'});
        response.write(JSON.stringify(httpResponse404));
    }
});
server.listen(3000);
console.log('Server gestart op http://localhost:3000 ...');