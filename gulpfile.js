var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var del = require('del');

var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('default', ['styles', 'build', 'templates', 'libraries', 'start']);

gulp.task('templates', function() {
  gulp.src(['!./src/index.html', './src/**/*.html'])
    .pipe($.html2js({
      outputModuleName: 'overflow.templates',
      useStrict: true
    }))
    .pipe($.concat('templates.js'))
    .pipe(gulp.dest('./public/js'))
});

gulp.task('build', function () {
  'use strict';

  return gulp
    .src(config.source)
    .pipe($.concat('app.js'))
    .pipe($.ngAnnotate())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('start', function () {
  'use strict';

  $.nodemon({
    script: './server/server.js',
    ext: 'js html',
    ignore: ['gulpfile.js', 'gulp.config.js'],
    env: {'NODE_ENV': 'development'}//,
    //tasks: ['vet']
  })
    .on('restart', function () {
      log('Restarted nodemon!');
    });
});

gulp.task('clean', function (done) {
  'use strict';

  clean(config.outputTarget, done);
});

gulp.task('libraries', function () {
  'use strict';

  return gulp.src(config.libraries)
    .pipe(gulp.dest('./public/js/lib'));
});

gulp.task('vet', function () {
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


gulp.task('styles', ['style-libraries'], function () {
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

gulp.task('style-libraries', function () {
  'use strict';

  return gulp.src(config.styleLibraries)
    .pipe(gulp.dest(config.styleDestination));
});

gulp.task('clean-styles', function (done) {
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
