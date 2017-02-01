var router = require('express').Router();

router.get('/api', function (request, response) {
    var msg = '<h1>Express API</h1>';
    msg += '<p>Gebruik \\api\\auteurs voor een lijst met auteurs.</p>';
    msg += '<p>Gebruik \\api\\boeken voor een lijst met boeken.</p>';
    response.send(msg);
});

router.get('/auto/:id', function (request, response) {

});

router.get('/addAuto', function (request, response) {
    response.redirect("addAuto.html");
});

router.get('/partners', function (request, response) {
    response.redirect("partners.html");
});

module.exports = router;