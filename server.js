// server.js
//
// MODULES
// ===============
var express = require('express');
var app = express();
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
var morgan = require('morgan');


// CONFIG
// ==================
// load the config fies
var configDB = require('./config/database');
var hostDB = require('./config/host');


