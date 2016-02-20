// server.js
//
// MODULES
// ===============
var express = require('express');
var app = express();
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
var morgan = require('morgan');
var multer = require('multer');

// CONFIG
// ==================
// load the config fies
var configDB = require('./config/database');
var hostDB = require('./config/host');
