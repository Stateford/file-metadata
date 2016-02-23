// server.js
//
// MODULES
// ===============
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var multer = require('multer');
var upload = multer();

// CONFIG
// ==================
// load the config fies
var hostDB = require('./config/host');

// set up app
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
// ===============

require('./app/routes')(app);

// server static files
app.use(express.static(__dirname + '/public'));

// start server
app.listen(host.port);
console.log('server is listening to port: ' + host.port);
