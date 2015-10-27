/**
 * @ngdoc directive
 * @name nav
 * @module overflow.core
 * @description Directive to encapsulate the top nav bar
 **/

(function() {
    'use strict';

    angular.module('overflow.core')
        .directive('navigationBar', nav);

    function nav() {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: 'src/core/nav/nav.html'
        }
    }
})();
