module.exports = function() {
  'use strict';

  var src = './public/';

  var config = {
    styleDestination: src + 'styles/',
    styleLibraries: [
      './node_modules/bootstrap/dist/css/bootstrap.css'
    ],
    outputTarget: src + '**/*.*',
    source: [
      './src/app/overflow.module.js',
      './src/app/modules/core/core.module.js',
      './src/app/modules/dashboard/dashboard.module.js',
      './src/app/modules/character/character.module.js',
      './src/app/modules/core/**/*.js',
      './src/app/modules/dashboard/**/*.js',
      './src/app/modules/character/**/*.js'
    ],
    less: './src/**/*.less',
    libraries: [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/jquery/dist/jquery.min.map',
      './node_modules/bootstrap/dist/js/bootstrap.min.js',
      './node_modules/angular/angular.min.js',
      './node_modules/angular/angular.min.js.map',
      './node_modules/angular-ui-router/release/angular-ui-router.min.js'
    ]
  };

  return config;
};
