var express = require('express');
var router = express.Router();
const controller = require('../controllers/travel')

/* GET travlr page. */
// Actual route/URL is declared in app.js
router.get('/', controller.travelList);

module.exports = router;