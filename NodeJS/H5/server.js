var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./router');

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/node_modules', express.static(__dirname + '/../../node_modules'));
app.use(express.static(__dirname + '/public'));
app.use(routes);
app.listen(3000, function () {
    console.log('Express app gestart op localhost:3000');
});