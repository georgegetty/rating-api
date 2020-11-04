var express = require('express');
var router = express.Router();
var jsonResponse = require('../models/jsonResponse');

/* Default GET JSON for site */
router.get('/', function(req, res, next) {
  var response = new jsonResponse("Default ratings api endpoint", 503, []);
  res.json(response).status(response.status);
});

module.exports = router;
