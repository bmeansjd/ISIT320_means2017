var express = require('express');
var router = express.Router();
const getPackageDescription  = require('isit320-means2017');
/* GET home page. */




router.get('/package-info', function(request, response) {

var message = {'cat-names': 'luda', 'fluffyella': 'iris', 'bryson':
        'rae', 'molly': 'index.js'};
        console.log('package-info called:\n' + JSON.stringify(message, null, 5))
        response.send(message)});

router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Week03-NpmProject' });
});



module.exports = router;
