var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var passport = require('./auth/local');

var app = express();

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(expressSession({
    secret: process.env.SESSION_SECRET || 'flowing over',
    resave: false,
    saveUninitialized: false
}));

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/../public/favicon.ico'));
app.use(logger('dev'));

app.use(require('less-middleware')(path.join(__dirname, '/public')));
app.use(express.static('public'));

var router = express.Router();
router.use('/characters', require('./routes/characters'));
router.use('/login', require('./routes/login'));

app.use('/api/v1', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    'use strict';

    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res) {
        'use strict';

        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
    'use strict';

    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
