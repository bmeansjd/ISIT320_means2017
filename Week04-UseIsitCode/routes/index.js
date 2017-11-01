var express = require('express');
var router = express.Router();
const isitCode = require('isit-code-means');
const elfUtils = require('isit-code-means').elfUtils;

router.get('/home-directory', function(req, res, next) { 'use strict';});
router.get('/first-word', function(req, res, next) { 'use strict';});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
