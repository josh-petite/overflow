module.exports = function() {
    'use strict';

    var src = './public/';

    return {
        fonts: './node_modules/fontawesome/fonts/*.*',
        styleDestination: src + 'styles/',
        styleLibraries: [
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './node_modules/bootstrap/dist/css/bootstrap.css.map',
            './node_modules/angular-toastr/dist/angular-toastr.min.css',
            './node_modules/spinkit/css/spinners/7-three-bounce.css',
            './node_modules/fontawesome/css/font-awesome.min.css'
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
            './node_modules/jquery/dist/jquery.js',
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/jquery/dist/jquery.min.map',
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            './node_modules/angular/angular.min.js',
            './node_modules/angular/angular.min.js.map',
            './node_modules/angular-resource/angular-resource.js',
            './node_modules/angular-resource/angular-resource.min.js',
            './node_modules/angular-resource/angular-resource.min.js.map',
            './node_modules/angular-ui-router/release/angular-ui-router.min.js',
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-animate/angular-animate.min.js',
            './node_modules/angular-animate/angular-animate.min.js.map',
            './node_modules/angular-toastr/dist/angular-toastr.tpls.js',
            './node_modules/api-check/dist/api-check.min.js',
            './node_modules/api-check/dist/api-check.min.js.map',
            './node_modules/angular-formly/dist/formly.min.js',
            './node_modules/angular-formly/dist/formly.min.js.map',
            './node_modules/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min.js',
            './node_modules/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min.js.map',
            './node_modules/angular-messages/angular-messages.min.js',
            './node_modules/angular-messages/angular-messages.min.js.map',
            './node_modules/phaser/build/phaser.min.js',
            './node_modules/phaser/build/phaser.map',
            './node_modules/underscore/underscore-min.js'
        ]
    };
};