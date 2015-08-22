module.exports = function() {
  'use strict';

  var src = './public/';

  var config = {
    styleDestination: src + 'styles/',
    styleLibraries: [
      './node_modules/bootstrap/dist/css/bootstrap.css',
      './node_modules/bootstrap/dist/css/bootstrap.css.map'
    ],
    outputTarget: src + '**/*.*',
    source: [
      './src/overflow.module.js',
      './src/core/core.module.js',
      './src/dashboard/dashboard.module.js',
      './src/character/character.module.js',
      './src/core/**/*.js',
      './src/dashboard/**/*.js',
      './src/character/**/*.js'
    ],
    less: './src/**/*.less',
    libraries: [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/jquery/dist/jquery.min.map',
      './node_modules/bootstrap/dist/js/bootstrap.min.js',
      './node_modules/angular/angular.min.js',
      './node_modules/angular/angular.min.js.map',
      './node_modules/angular-resource/angular-resource.min.js',
      './node_modules/angular-resource/angular-resource.min.js.map',
      './node_modules/angular-ui-router/release/angular-ui-router.min.js'
    ]
  };

  return config;
};
