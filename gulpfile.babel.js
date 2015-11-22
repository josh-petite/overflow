(function () {
    'use strict';

    const gulp = require('gulp');
    const args = require('yargs').argv;
    const config = require('./gulp.config')();
    const del = require('del');
    const Server = require('karma').Server;
    const csswring = require('csswring');
    const autoprefixer = require('autoprefixer');

    const $ = require('gulp-load-plugins')({lazy: true});

    gulp.task('heroku:dev', ['styles', 'compile', 'templates', 'libraries', 'fonts']);

    gulp.task('test', ['compile', 'templates'], function (done) {
        new Server({
            configFile: __dirname + '/karma.conf.js',
            singleRun: true
        }, done).start();
    });

    gulp.task('default', ['styles', 'compile', 'templates', 'libraries', 'fonts'], function () {
        $.nodemon({
            script: './server/server.js',
            ext: 'js html less',
            ignore: ['node_modules/**/*.js', 'public/js/**/*.js'],
            env: {'NODE_ENV': 'development'},
            tasks: ['styles', 'compile', 'templates']
        });

        return gulp.src('')
            .pipe($.open({app: 'chrome', uri: 'https://localhost:3000'}));
    });

    gulp.task('templates', function () {
        return gulp.src(['./src/**/*.html'])
            .pipe($.html2js({
                outputModuleName: 'overflow.templates',
                useStrict: true
            }))
            .pipe($.concat('templates.js'))
            .pipe(gulp.dest('./public/js'));
    });

    gulp.task('compile', ['clean-source'], function () {
        return gulp
            .src(config.source)
            .pipe($.ngAnnotate())
            .pipe($.babel({
                presets: ['es2015']
            }))
            .pipe($.concat('app.js'))
            .pipe(gulp.dest('./public/js'));
    });

    gulp.task('libraries', ['clean-styles'], function () {
        return gulp.src(config.libraries)
            .pipe(gulp.dest('./public/js/lib'));
    });

    gulp.task('fonts', function () {
        return gulp
            .src(config.fonts)
            .pipe(gulp.dest('./public/fonts'));
    });

    gulp.task('clean-source', function () {
        del('./public/js/*.*').then(paths => {
            console.log('Deleted source files and folders:\n', paths.join('\n'));
        });
    });

    gulp.task('clean-styles', function () {
        del('./public/styles/*.*').then(paths => {
            console.log('Deleted style files and folders:\n', paths.join('\n'));
        });
    });

    gulp.task('vet', function () {
        return gulp
            .src(config.source)
            .pipe($.if(args.verbose, $.print()))
            .pipe($.jscs())
            .pipe($.jshint())
            .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
            .pipe($.jshint.reporter('fail'));
    });


    gulp.task('styles', ['style-libraries'], function () {
        var processors = [
            autoprefixer({browsers: ['last 2 version', '> 5%']}),
            csswring
        ];

        return gulp
            .src(config.less)
            .pipe($.plumber())
            .pipe($.less())
            .pipe($.concat('overflow.css'))
            .pipe($.postcss(processors))
            .pipe(gulp.dest('./public/styles'));
    });

    gulp.task('style-libraries', function () {
        return gulp.src(config.styleLibraries)
            .pipe(gulp.dest('./public/styles'));
    });

///////////////////////////////////////////////////////////////////////////////

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