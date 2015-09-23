module.exports = function() {
    'use strict';

    var src = './public/';

    var config = {
        typescriptSource: './src/**/*.ts',
        fonts: './bower_components/fontawesome/fonts/*.*',
        styleDestination: src + 'styles/',
        styleLibraries: [
            './bower_components/bootstrap/dist/css/bootstrap.css',
            './bower_components/bootstrap/dist/css/bootstrap.css.map',
            './bower_components/angular-toastr/dist/angular-toastr.min.css',
            './bower_components/spinkit/css/spinners/7-three-bounce.css',
            './bower_components/fontawesome/css/font-awesome.min.css'
        ],
        jsTarget: src + 'js/*.*',
        styleTarget: src + 'styles/*.*',
        outputTarget: src + '**/*.*',
        source: [
            './src/overflow.module.js',
            './src/main.controller.js',
            './src/core/core.module.js',
            './src/account/account.module.js',
            './src/login/login.module.js',
            './src/dashboard/dashboard.module.js',
            './src/character/character.module.js',
            './src/core/**/*.js',
            './src/account/**/*.js',
            './src/login/**/*.js',
            './src/dashboard/**/*.js',
            './src/character/**/*.js'
        ],
        less: './src/**/*.less',
        libraryDestination: src + 'js/lib/',
        libraries: [
            './bower_components/jquery/dist/jquery.js',
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/jquery/dist/jquery.min.map',
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            './bower_components/angular/angular.min.js',
            './bower_components/angular/angular.min.js.map',
            './bower_components/angular-resource/angular-resource.js',
            './bower_components/angular-resource/angular-resource.min.js',
            './bower_components/angular-resource/angular-resource.min.js.map',
            './bower_components/angular-ui-router/release/angular-ui-router.min.js',
            './bower_components/angular-animate/angular-animate.js',
            './bower_components/angular-animate/angular-animate.min.js',
            './bower_components/angular-animate/angular-animate.min.js.map',
            './bower_components/angular-toastr/dist/angular-toastr.tpls.js',
            './bower_components/api-check/dist/api-check.min.js',
            './bower_components/api-check/dist/api-check.min.js.map',
            './bower_components/angular-formly/dist/formly.min.js',
            './bower_components/angular-formly/dist/formly.min.js.map',
            './bower_components/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min.js',
            './bower_components/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min.js.map',
            './bower_components/angular-messages/angular-messages.min.js',
            './bower_components/angular-messages/angular-messages.min.js.map',
            './bower_components/phaser/build/phaser.min.js',
            './bower_components/phaser/build/phaser.map'
        ]
    };

    return config;
};
