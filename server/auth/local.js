var passport = require('passport');
var passportLocal = require('passport-local');

passport.use(new passportLocal.Strategy(function(username, password, done) {
    if (username === 'superuser' && password === 'admin') {
        return done(null, {id: 1, name: username, isAuthenticated: true});
    } else {
        return done(new Error('passport login failed!'), null);
    }
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    if (id === 1) {
        done(null, {id: 1, name: 'superuser', isAuthenticated: true});
    }
});

module.exports = passport;