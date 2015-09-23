/// <reference path="../typings/angularjs/angular.d.ts" />
/**
 * @ngdoc module
 * @name overflow
 * @module overflow
 * @description Primary module for overflow application.
 **/
var Overflow;
(function (Overflow) {
    'use strict';
    angular.module('overflow', [
        'overflow.core',
        'overflow.account',
        'overflow.login',
        'overflow.dashboard'
    ]);
})(Overflow || (Overflow = {}));
//# sourceMappingURL=overflow.module.js.map