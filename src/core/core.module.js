/**
 * Created by Josh on 7/6/15.
 */

/**
 * @ngdoc module
 * @name overflow.core
 * @module overflow
 * @description Core module for dependencies that should be inherited across many different modules.
 *              Global directives and services will also be found here.
 **/
angular.module('overflow.core', [
    'ngResource',
    'ngAnimate',
    'toastr',
    'ui.router',
    'overflow.templates'
]);
