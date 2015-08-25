var express = require('express');
var router = express.Router();
var pg = require('pg');

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/:id', function (req, res) {
    var db = 'postgres://voksiwgkmieraq:uqpa5tBRBYQkoZZaCodIe7oq81@ec2-54-227-255-240.compute-1.amazonaws.com:5432/d9798pd02ordli?ssl=true';
    pg.connect(db, function(err, client) {
        if (err) throw err;
        console.log('Connected to postgres! Getting schemas...');

        client
            .query('SELECT id, name, level, job, hitPoints, createdDate from character where id = ' + req.params.id + ';')
            .on('row', function(row) {
                var result = JSON.stringify(row);
                console.log(result);
                res.send(result);
            });
    });
});

// define the about route
router.get('/about', function (req, res) {
    res.send('About');
});

module.exports = router;