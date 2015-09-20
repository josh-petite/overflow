/**
 * @ngdoc directive
 * @name loadingIndicator
 * @module overflow.core
 * @description Directive to encapsulate the loading indicator to be used throughout the game
 **/

(function() {
    'use strict';

    angular.module('overflow.core')
        .directive('loadingIndicator', loadingIndicator);

    /* ngInject */
    function loadingIndicator() {
        return {
            scope: {},
            template: '<div class="sk-three-bounce">' +
                       '<div class="sk-child sk-bounce1"></div>' +
                       '<div class="sk-child sk-bounce2"></div>' +
                       '<div class="sk-child sk-bounce3"></div>' +
                      '</div>'
        };
    }
})();
