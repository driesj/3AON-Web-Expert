var fs = require('fs');
var path = require('path');
var mime = require('mime');
// var ejs = require('ejs');
var root = __dirname + '/public/';
var htmlErrorCode404 = __dirname + '/public/404.html';

var http = require('http');
var server = http.createServer(function (request, response) {
    var url = request.url;
    switch (url) {
        case '/':
            showPage('index.html');
            break;
        case '/pagina1':
            showPage('pag1.html');
            break;
        case '/pagina2':
            showPage('pag2.html');
            break;
        case '/pagina3':
            showPage('pag3.html');
            break;
        case '/pagina4':
            showPage('pag4.html');
            break;
        default:
            showPage(url);
    }

    function showPage(page) {
        var fileName = root + page;

        fs.exists(fileName, function (exists) {
            if (exists) {
                serveFile(fileName);
            } else {
                serve404();
            }
        })
    }

    function serveFile(pageToShow) {
        response.writeHead(200, {'Content-Type': mime.lookup(pageToShow)});
        var stream = fs.createReadStream(pageToShow);
        stream.on('data', function (chunk) {
            response.write(chunk);
        });
        stream.on('end', function () {
            response.end();
        });
        stream.on('error', function (err) {
            console.log('error: ' + err);
        });
    }

    function serve404() {
        response.writeHead(404, {'Content-Type': mime.lookup(htmlErrorCode404)});
        fs.readFile(htmlErrorCode404, 'utf8', function (err, data) {
            if (err) {
                console.log('Error: ', err);
            } else {
                response.end(data);
            }
        })
    }
});

server.listen(3000, function () {
    console.log('Server gestart op http://localhost:3000');
});