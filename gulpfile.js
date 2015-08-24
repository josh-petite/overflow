var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var del = require('del');
var Server = require('karma').Server;

var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('heroku:dev', ['styles', 'build', 'templates', 'libraries']);

gulp.task('test', ['templates'], function(done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('default', ['styles', 'build', 'templates', 'libraries', 'start']);

gulp.task('templates', function() {
    log('Compiling templates and saving to public...');

    gulp.src(['./src/**/*.html'])
        .pipe($.html2js({
            outputModuleName: 'overflow.templates',
            useStrict: true
        }))
        .pipe($.concat('templates.js'))
        .pipe(gulp.dest('./public/js'))
});

gulp.task('build', ['clean'], function() {
    'use strict';

    log('Compiling all JS to app.js and saving to public...');

    return gulp
        .src(config.source)
        .pipe($.concat('app.js'))
        .pipe($.ngAnnotate())
        .pipe(gulp.dest('./public/js'));
});

gulp.task('start', function() {
    'use strict';

    $.nodemon({
        script: './server/server.js',
        ext: 'js html less',
        ignore: ['gulpfile.js', 'gulp.config.js', 'node_modules/**/*.js', 'bower_components/**/*.js', 'public/js/**/*.js'],
        env: {'NODE_ENV': 'development'},
        tasks: ['styles', 'build', 'templates', 'libraries', 'vet']
    })
        .on('restart', function() {
            log('Restarted nodemon!');
        });
});

gulp.task('clean', ['clean-scripts', 'clean-styles']);

gulp.task('clean-scripts', function(done) {
    'use strict';

    clean(config.jsTarget, done);
});

gulp.task('clean-styles', function(done) {
    'use strict';

    clean(config.styleTarget, done);
});

gulp.task('libraries', function() {
    'use strict';

    log('Copying libraries to public...')

    return gulp.src(config.libraries)
        .pipe(gulp.dest(config.libraryDestination));
});

gulp.task('vet', function() {
    'use strict';

    log('Analyzing source with JSHint and JSCS...');

    return gulp
        .src(config.source)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));
});


gulp.task('styles', ['style-libraries'], function() {
    'use strict';

    log('Compiling LESS -> CSS...');

    return gulp
        .src(config.less)
        .pipe($.plumber())
        .pipe($.less())
        .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe($.concat('overflow.css'))
        .pipe(gulp.dest(config.styleDestination));
});

gulp.task('style-libraries', function() {
    'use strict';

    return gulp.src(config.styleLibraries)
        .pipe(gulp.dest(config.styleDestination));
});

gulp.task('clean-styles', function(done) {
    'use strict';

    var files = config.styleDestination + '**/*.css';
    clean(files, done);
});

///////////////////////////////////////////////////////////////////////////////

function clean(path, done) {
    'use strict';

    del(path, done);

    log('Cleaning: ' + $.util.colors.blue(path));
}

function log(message) {
    'use strict';

    if (typeof(message) === 'object') {
        for (var item in message) {
            if (message.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(message[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(message));
    }
}
