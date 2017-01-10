var fs = require('fs');
var path = require('path');
var mime = require('mime');
// var ejs = require('ejs');
var root = __dirname + '/public/';

var http = require('http');
var server = http.createServer(function (request, response) {
    var url = request.url;
    switch (url) {
        case '/':
            showPage('index.html');
            break;
        case '/pag1':
            showPage('pag1.html');
            break;
        case '/pag2':
            showPage('pag2.html');
            break;
        case '/pag3':
            showPage('pag3.html');
            break;
        case '/pag4':
            showPage('pag4.html');
            break;
        default:
            serve404(root + '404.html');
    }

    function showPage(page) {
        var fileName = root + page;

        fs.exists(fileName, function (exists) {
            if (exists) {
                serveFile(fileName);
            } else {
                serve404(root + '404.html');
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

    function serve404(pageToShow) {
        response.writeHead(404, {'Content-Type': mime.lookup(pageToShow)});
        fs.readFile(pageToShow, 'utf8', function (err, data) {
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