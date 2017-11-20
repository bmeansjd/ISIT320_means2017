var express = require('express');
var router = express.Router();

const getPackageDescription  = require('isit320_means2017');

/* GET home page. */


router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Week03-NpmProject' });
});

router.get('/package-info', function(request, response) { 'use strict' })

;

module.exports = router;
