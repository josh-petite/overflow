var express = require('express');
var router = express.Router();

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/:id', function (req, res) {
    if (req.params.id == 1) {
        res.send({
            name: 'Marcant',
            level: 1,
            hitPoints: 5,
            job: 'Mercenary'
        });
    }
});

// define the about route
router.get('/about', function (req, res) {
    res.send('About');
});

module.exports = router;