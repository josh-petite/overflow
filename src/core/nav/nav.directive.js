/**
 * @ngdoc directive
 * @name nav
 * @module overflow.core
 * @description Directive to encapsulate the top nav bar
 **/

(function() {
    'use strict';

    angular.module('overflow.core')
        .directive('nav', nav);

    /* ngInject */
    function nav() {
        return {
            restrict: 'A',
            scope: {},
            templateUrl: 'src/core/nav/nav.html'
        };
    }
})();
