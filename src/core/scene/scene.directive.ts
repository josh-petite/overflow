/// <reference path="../../../typings/angularjs/angular.d.ts" />

/**
 * @ngdoc directive
 * @name scene
 * @module overflow.core
 * @description Directive to encapsulate the main game canvas
 **/

module Overflow.Core.Directives {

    class SceneDirective implements ng.IDirective {
        public scope : {
            target: string;
        };

        public templateUrl : string;
        public controller : string;

        constructor() {
            this.scope.target = '@';
            this.templateUrl = 'src/core/scene/scene.html';
            this.controller = 'SceneController';
        }

        public static Factory() {
            return () => { return new SceneDirective(); };
        }
    }

    angular.module('overflow.core')
        .directive('scene', SceneDirective.Factory());
}