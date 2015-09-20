var express = require('express');
var router = express.Router();
var db = require('../db/database');

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/:id', function(req, res) {
    db.query('SELECT id, name, level, job, hitPoints, createdDate from character where id = $1', req.params.id)
        .then(function(data) {
            console.log(data[0]);
            res.send(data[0]);
        }, function(reason) {
            console.log(reason);
        });
});

// define the about route
router.get('/about', function(req, res) {
    res.send('About');
});

module.exports = router;