var express = require('express');
var router = express.Router();
var jsonResponse = require('../models/jsonResponse');

/* Default GET JSON for site */
router.get('/', function(req, res, next) {
  var response = new jsonResponse("Default ratings api endpoint", 200, []);
  res.json(response).status(response.status);
});

router.get('/newone', function(req, res, next) {
  var response = new jsonResponse("Default ratings api endpoint", 200, []);
  res.json(response).status(response.status);
});

router.get('/healthcheck', function(req, res, next) {
  var response = new jsonResponse("Ok", 200, []);
  res.json(response).status(response.status);
});

module.exports = router;
