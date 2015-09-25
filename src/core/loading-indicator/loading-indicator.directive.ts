/// <reference path="../../../typings/angularjs/angular.d.ts" />

/**
 * @ngdoc directive
 * @name loadingIndicator
 * @module overflow.core
 * @description Directive to encapsulate the loading indicator to be used throughout the game
 **/

module Overflow.Core.Directives {
    class LoadingIndicatorDirective {
        public scope : {};
        public template : string;

        constructor() {
            this.template = '<div class="sk-three-bounce">' +
                '<div class="sk-child sk-bounce1"></div>' +
                '<div class="sk-child sk-bounce2"></div>' +
                '<div class="sk-child sk-bounce3"></div>' +
                '</div>';
        }

        public static Factory() {
            return () => { return new LoadingIndicatorDirective(); };
        }
    }

    angular.module('overflow.core')
        .directive('loadingIndicator', LoadingIndicatorDirective.Factory());
}
