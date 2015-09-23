/// <reference path="../../typings/express/express.d.ts" />

import express = require('express');
import bcrypt = require('bcrypt');
import db = require('../db/database');

var router = express.Router();

router.post('/', (req, res) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.password, salt, function(err, hash) {
            db.query('INSERT INTO users VALUES ($1, $2, $3, $4)', req.email, hash, salt, db.as.date(Date.now()))
                .then(function(data) {
                    console.log(data[0]);
                    res.send(data[0]);
                }, function(reason) {
                    console.log(reason);
                });
        });
    });
});

module.exports = router;