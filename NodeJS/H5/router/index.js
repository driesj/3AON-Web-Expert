var router = require('express').Router();

router.get('/auto/:id', function (request, response) {
    var id = request.params.id;
    response.sendFile("auto.html", {root: 'public', id: id});
});

router.get('/deleteAuto/:id', function (request, response) {
    var id = request.params.id;
});

router.get('/addAuto', function (request, response) {
    response.sendFile("addAuto.html", {root: 'public'});
});

router.get('/partners', function (request, response) {
    response.sendFile("partners.html", {root: 'public'});
});

module.exports = router;