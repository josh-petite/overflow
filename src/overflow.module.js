/**
 * @ngdoc module
 * @name overflow
 * @module overflow
 * @description Primary module for overflow application. Houses a single wrapper controller
 *              for handing global eventing.
 **/

(function() {
    'use strict';

    angular.module('overflow', [
        'overflow.core',
        'overflow.account',
        'overflow.login',
        'overflow.dashboard'
    ]);
})();
