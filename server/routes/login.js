var express = require('express');
var router = express.Router();

var db = require('../db/database');
var passport = require('passport');

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.post('/', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/'
}));


module.exports = router;