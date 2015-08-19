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
      './client/app/overflow.module.js',
      './client/app/modules/core/core.module.js',
      './client/app/modules/dashboard/dashboard.module.js',
      './client/app/modules/character/character.module.js',
      './client/app/modules/core/**/*.js',
      './client/app/modules/dashboard/**/*.js',
      './client/app/modules/character/**/*.js'
    ],
    less: './client/**/*.less',
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
