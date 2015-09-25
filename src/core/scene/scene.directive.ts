/// <reference path="../../../typings/angularjs/angular.d.ts" />

/**
 * @ngdoc directive
 * @name scene
 * @module overflow.core
 * @description Directive to encapsulate the main game canvas
 **/

module Overflow.Core.Directives {

    interface SceneDirectiveScope extends ng.IScope {
        target: string;
    }

    class SceneDirective {
        public scope : SceneDirectiveScope;
        public templateUrl : string;
        public controller : string;

        constructor($scope: SceneDirectiveScope) {
            this.scope = $scope;
            this.scope.target = '@';
            this.templateUrl = 'src/core/scene/scene.html';
            this.controller = 'SceneController';
        }

        public static Factory() {
            return ($scope) => {
                var directive = new SceneDirective($scope);

                directive['$inject'] = ['$scope'];

                return directive;
            };
        }
    }

    angular.module('overflow.core')
        .directive('scene', SceneDirective.Factory());
}