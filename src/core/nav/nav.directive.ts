/// <reference path="../../../typings/angularjs/angular.d.ts" />

/**
 * @ngdoc directive
 * @name nav
 * @module overflow.core
 * @description Directive to encapsulate the top nav bar
 **/

module Overflow.Core.Directives {
    class HorizontalNavDirective implements ng.IDirective {
        public scope : any;
        public templateUrl : string;

        constructor() {
            this.scope = {};
            this.templateUrl = 'src/core/nav/nav.html';
        }

        public static Factory() {
            return () => {
                return new HorizontalNavDirective();
            };
        }
    }

    angular.module('overflow.core')
        .directive('nav', HorizontalNavDirective.Factory());
}