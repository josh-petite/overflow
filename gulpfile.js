(function () {
    'use strict';

    var gulp = require('gulp');
    var args = require('yargs').argv;
    var config = require('./gulp.config')();
    var del = require('del');
    var Server = require('karma').Server;
    var csswring = require('csswring');
    var autoprefixer = require('autoprefixer');

    var $ = require('gulp-load-plugins')({ lazy: true });

    gulp.task('heroku:dev', ['styles', 'compile', 'templates', 'libraries', 'fonts']);

    gulp.task('test', ['templates'], function (done) {
        new Server({
            configFile: __dirname + '/karma.conf.js',
            singleRun: true
        }, done).start();
    });

    gulp.task('default', ['styles', 'compile', 'templates', 'libraries', 'fonts', 'nodemon'], function () {
        gulp.src('')
            .pipe($.open({ app: 'firefox', uri: 'http://localhost:3000' }));
    });

    gulp.task('templates', function () {
        gulp.src(['./src/**/*.html'])
            .pipe($.html2js({
                outputModuleName: 'overflow.templates',
                useStrict: true
            }))
            .pipe($.concat('templates.js'))
            .pipe(gulp.dest('./public/js'))
    });

    gulp.task('compile', ['clean'], function () {
        'use strict';

        return gulp
            .src(config.source)
            .pipe($.concat('app.js'))
            .pipe($.ngAnnotate())
            .pipe(gulp.dest('./public/js'));
    });

    gulp.task('fonts', function () {
        return gulp
            .src(config.fonts)
            .pipe(gulp.dest('./public/fonts'));
    });

    gulp.task('nodemon', function () {
        $.nodemon({
            script: './server/server.js',
            ext: 'js html less',
            ignore: ['node_modules/**/*.js', 'bower_components/**/*.js', 'public/js/**/*.js'],
            env: { 'NODE_ENV': 'development' },
            tasks: ['styles', 'compile', 'templates', 'libraries', 'vet']
        });
    });

    gulp.task('clean', ['clean-scripts', 'clean-styles']);

    gulp.task('clean-scripts', function (done) {
        clean(config.jsTarget, done);
    });

    gulp.task('clean-styles', function (done) {
        clean(config.styleTarget, done);
    });

    gulp.task('libraries', function () {
        return gulp.src(config.libraries)
            .pipe(gulp.dest(config.libraryDestination));
    });

    gulp.task('vet', function () {
        return gulp
            .src(config.source)
            .pipe($.if(args.verbose, $.print()))
            .pipe($.jscs())
            .pipe($.jshint())
            .pipe($.jshint.reporter('jshint-stylish', { verbose: true }))
            .pipe($.jshint.reporter('fail'));
    });


    gulp.task('styles', ['style-libraries'], function () {
        var processors = [
            autoprefixer({ browsers: ['last 2 version', '> 5%'] }),
            csswring
        ];

        return gulp
            .src(config.less)
            .pipe($.plumber())
            .pipe($.less())
            .pipe($.concat('overflow.css'))
            .pipe($.postcss(processors))
            .pipe(gulp.dest(config.styleDestination));
    });

    gulp.task('style-libraries', function () {
        return gulp.src(config.styleLibraries)
            .pipe(gulp.dest(config.styleDestination));
    });

    gulp.task('clean-styles', function (done) {
        var files = config.styleDestination + '**/*.css';
        clean(files, done);
    });

///////////////////////////////////////////////////////////////////////////////

    function clean(path, done) {
        del(path, done);
        log('Cleaning: ' + $.util.colors.blue(path));
    }

    function log(message) {
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
})();