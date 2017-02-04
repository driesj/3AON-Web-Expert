var router = require('express').Router();
var films = require('../data/films.json');

router.get('/api/films', function (request, response) {
    response.json(films);
});

router.post('/api/addfilm', function (request, response) {
    var lastId = 0;

    films.forEach(function (film) {
        if (film.id > lastId) {
            lastId = film.id;
        }
    });

    var newFilm = {
        "id": lastId + 1,
        "titel": request.body.titel,
        "auteur": request.body.auteur,
        "jaar": request.body.jaar
    };
    films.push(newFilm);
    response.json(films);
});

router.delete('/api/deletefilm/:id', function (request, response) {
    for (i = 0; i < films.length; i++) {
        if (films[i].id == request.params.id) {
            films.splice(i, 1);
            response.json(films);
        }
    }

    // Joran Claessens zijn oplossing
    /*
     films.forEach(function (film) {
     if (film.id == request.params.id) {
     films.splice(films.indexOf(film), 1);
     }
     });
     response.json(films);
     */
});

router.get('*', function (request, response) {
    response.sendFile("index.html", {root: 'public'});
});

module.exports = router;