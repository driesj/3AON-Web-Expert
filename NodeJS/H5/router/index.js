var router = require('express').Router();
var http = require('request');

router.get('/api/autos', function (request, response) {
    http('http://localhost/webexpert/AngularJS/H6/API/autos', function (httpError, httpResponse, httpBody) {
        if (!httpError && httpResponse.statusCode == 200) {
            response.json(JSON.parse(httpBody));
        }
    });
});

router.get('/api/auto/:id', function (request, response) {
    http('http://localhost/webexpert/AngularJS/H6/API/auto/' + request.params.id, function (httpError, httpResponse, httpBody) {
        if (!httpError && httpResponse.statusCode == 200) {
            response.json(JSON.parse(httpBody))
        }
    })
});

router.get('/api/typeAutos', function (request, response) {
    http('http://localhost/webexpert/AngularJS/H6/API/typeAutos', function (httpError, httpResponse, httpBody) {
        if (!httpError && httpResponse.statusCode == 200) {
            response.json(JSON.parse(httpBody))
        }
    })
});

router.post('/api/newAuto', function (request, response) {
    http({
        method: 'POST',
        url: 'http://localhost/webexpert/AngularJS/H6/API/newAuto',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(request.body)
    }, function (httpError, httpResponse, httpBody) {
        response.json(JSON.parse(httpBody))
    })
});

router.post('/api/deleteAuto/:id', function (request, response) {
    http({
        method: 'POST',
        url: 'http://localhost/webexpert/AngularJS/H6/API/deleteAuto/' + request.params.id
    }, function (httpError, httpResponse, httpBody) {
        response.json(JSON.parse(httpBody))
    })
});

router.get('*', function (request, response) {
    response.sendFile("index.html", {root: 'public'});
});

module.exports = router;