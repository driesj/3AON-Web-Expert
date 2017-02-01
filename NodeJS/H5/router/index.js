var router = require('express').Router();

router.get('/auto/:id', function (request, response) {
    var id = request.params.id;
});

router.get('/deleteAuto/:id', function (request, response) {
    var id = request.params.id;
});

router.get('/addAuto', function (request, response) {
    response.redirect("addAuto.html");
});

router.get('/partners', function (request, response) {
    response.render('partners.html', function(err, html) {
        response.send(html);
    })
//    response.redirect("partners.html");
});

module.exports = router;