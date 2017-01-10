var http = required('http');
var server = http.createServer(function (request, response) {
    var routes = ['/'];
    if (routes.indexOf(request.url) != -1) {
        switch (request.url) {
            case '/':
                break;
            default:
        }
    } else {

    }
});