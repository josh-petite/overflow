/**
 * @ngdoc module
 * @name overflow.core
 * @module overflow
 * @description Core module for dependencies that should be inherited across many different modules.
 *              Global directives and services will also be found here.
 **/

(function() {
    'use strict';

    angular.module('overflow.core', [
        'ngResource',
        'ngAnimate',
        'ngMessages',
        'toastr',
        'ui.router',
        'formly',
        'formlyBootstrap',
        'overflow.templates'
    ]);
})();
