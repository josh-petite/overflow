module.exports = function () {
    'use strict';

    var src = './public/';

    var config = {
        styleDestination: src + 'styles/',
        styleLibraries: [
            './bower_components/bootstrap/dist/css/bootstrap.css',
            './bower_components/bootstrap/dist/css/bootstrap.css.map',
            './bower_components/angular-toastr/dist/angular-toastr.min.css'
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
            './bower_components/jquery/dist/jquery.js',
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/jquery/dist/jquery.min.map',
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            './bower_components/angular/angular.js',
            './bower_components/angular/angular.min.js',
            './bower_components/angular/angular.min.js.map',
            './bower_components/angular-resource/angular-resource.js',
            './bower_components/angular-resource/angular-resource.min.js',
            './bower_components/angular-resource/angular-resource.min.js.map',
            './bower_components/angular-ui-router/release/angular-ui-router.min.js',
            './bower_components/angular-animate/angular-animate.js',
            './bower_components/angular-animate/angular-animate.min.js',
            './bower_components/angular-animate/angular-animate.min.js.map',
            './bower_components/angular-toastr/dist/angular-toastr.min.js',
            './bower_components/angular-toastr/dist/angular-toastr.tpls.js'
        ]
    };

    return config;
};
