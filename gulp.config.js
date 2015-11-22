module.exports = function() {
    'use strict';

    var dest = './public/';

    return {
        fonts: './node_modules/fontawesome/fonts/*.*',
        styleDestination: dest + 'styles/',
        styleLibraries: [
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './node_modules/bootstrap/dist/css/bootstrap.css.map',
            './node_modules/angular-toastr/dist/angular-toastr.min.css',
            './node_modules/spinkit/css/spinners/7-three-bounce.css',
            './node_modules/fontawesome/css/font-awesome.min.css'
        ],
        jsTarget: dest + 'js/*.*',
        styleTarget: dest + 'styles/*.*',
        outputTarget: dest + '**/*.*',
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
        libraries: [
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './node_modules/angular/angular.js',
            './node_modules/angular-resource/angular-resource.js',
            './node_modules/angular-ui-router/release/angular-ui-router.js',
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-toastr/dist/angular-toastr.tpls.js',
            './node_modules/api-check/dist/api-check.js',
            './node_modules/angular-formly/dist/formly.js',
            './node_modules/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.js',
            './node_modules/angular-messages/angular-messages.js',
            './node_modules/phaser/build/phaser.js',
            './node_modules/underscore/underscore.js'
        ]
    };
};