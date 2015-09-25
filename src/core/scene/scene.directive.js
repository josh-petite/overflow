/// <reference path="../../../typings/angularjs/angular.d.ts" />
/**
 * @ngdoc directive
 * @name scene
 * @module overflow.core
 * @description Directive to encapsulate the main game canvas
 **/
var Overflow;
(function (Overflow) {
    var Core;
    (function (Core) {
        var Directives;
        (function (Directives) {
            var SceneDirective = (function () {
                function SceneDirective($scope) {
                    this.scope = $scope;
                    this.scope.target = '@';
                    this.templateUrl = 'src/core/scene/scene.html';
                    this.controller = 'SceneController';
                }
                SceneDirective.Factory = function () {
                    return function ($scope) {
                        var directive = new SceneDirective($scope);
                        directive['$inject'] = ['$scope'];
                        return directive;
                    };
                };
                return SceneDirective;
            })();
            angular.module('overflow.core').directive('scene', SceneDirective.Factory());
        })(Directives = Core.Directives || (Core.Directives = {}));
    })(Core = Overflow.Core || (Overflow.Core = {}));
})(Overflow || (Overflow = {}));
//# sourceMappingURL=scene.directive.js.map